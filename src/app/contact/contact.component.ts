import { OnInit, Component, ComponentRef, ChangeDetectionStrategy, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NotificationsService } from 'angular2-notifications';

import { of, EMPTY } from 'rxjs';
import { take, delay, tap, catchError } from 'rxjs/operators';

import { DialogComponent } from './dialog.component';
import { slideMapAnimation } from './contact.animations';
import { validationMessages } from './contact.helper';

@Component({
  host: {
    'class': 'app-page'
  },
  selector: 'contact',
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideMapAnimation]
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  formErrors = {name: [], email: [], message: []};
  showMap$: any;

  /** Success overlay ref */
  private _overlayRef: OverlayRef;

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get message() {
    return this.form.get('message');
  }

  constructor(private _router: Router,
              private _notification: NotificationsService,
              private _overlay: Overlay,
              private _http: HttpClient) {
  }

  ngOnInit() {
    this.buildForm();
    this.showMap$ = of({}).pipe(
      delay(2500),
      take(1)
    );
  }

  sendEmail() {
    if (!this.submitted) {
      this.disableForm(true);

      if (this.form.valid) {
        this._http
          .post('https://www.enformed.io/nzu4f1k8/', JSON.stringify(this.form.value))
          .pipe(
            tap(res => {
              console.log(res);
              this.disableForm(false);
              this.form.reset();
              this.openDialog();
            }),
            catchError(err => {
              console.log('ERR', err);
              return EMPTY;
            })
          ).subscribe();
      }
    }
  }

  buildForm() {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24)
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    });

    this.form.valueChanges.subscribe(() => this.onValueChanged());
    this.onValueChanged(); // (re)set validation messages for the first time
  }

  onValueChanged() {
    Object.keys(this.formErrors).map((field: string) => {
      // reset error messages
      this.formErrors[field] = [];

      const control = this.form.get(field);
      console.log();
      if (control && !control.valid && control.errors) {
        const message = validationMessages[field];

        Object.keys(control.errors).map((key: string) =>
          this.formErrors[field].push(message[key])
        );
      }
    });
  }

  disableForm(value: boolean) {
    this.submitted = value;
    // Object.keys(this.form.controls)
    //   .map((key: string) => {
    //     if (value) {
    //       this.form.get(key).disable();
    //     } else {
    //       this.form.get(key).enable();
    //     }
    //   });
  }

  openDialog() {
    const overlayConfig: OverlayConfig = {
      panelClass: 'success-dialog',
      hasBackdrop: true,
      positionStrategy: this._overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      scrollStrategy: this._overlay.scrollStrategies.block()
    };

    this._overlayRef = this._overlay.create(overlayConfig);

    /** Attach gallery to the overlay */
    const galleryPortal = new ComponentPortal(DialogComponent);
    const dialogRef: ComponentRef<DialogComponent> = this._overlayRef.attach(
      galleryPortal
    );

    dialogRef.instance.overlayRef = this._overlayRef;
  }
}
