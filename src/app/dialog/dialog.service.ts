import { Injectable } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef, OverlayConfig } from '@angular/cdk/overlay';
import { ESCAPE } from '@angular/cdk/keycodes';
import { LoginComponent } from './login/login.component';

@Injectable()
export class DialogService {

  /** Overlay ref */
  private _overlayRef: OverlayRef;

  constructor(private _overlay: Overlay) {
  }

  openLogin() {
    const overlayRef = this._overlay.create();
    const loginPortal = new ComponentPortal(LoginComponent);
    overlayRef.attach(loginPortal);
  }

  open() {

    const overlayConfig: OverlayConfig = {
      backdropClass: '',
      panelClass: '',
      hasBackdrop: true,
      positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: this._overlay.scrollStrategies.block(),
      disposeOnNavigation: true
    };

    this._overlayRef = this._overlay.create(overlayConfig);

    // Attach gallery to the overlay
    // const componentPortal = new ComponentPortal();
    // const dialogRef: ComponentRef<> = this._overlayRef.attach(componentPortal);

    // dialogRef.instance.overlayRef = this._overlayRef;

    // Close on backdrop click
    this._overlayRef.backdropClick().subscribe(() => this.close());

    // Close on escape button click
    this._overlayRef.keydownEvents().subscribe((event: KeyboardEvent) => {
      if (event.keyCode === ESCAPE) {
        this.close();
      }
    });
  }

  /**
   * Close Dialog
   */
  close() {
    if (this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
    }
  }
}
