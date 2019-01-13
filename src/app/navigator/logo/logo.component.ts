import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay, mergeMap, repeat } from 'rxjs/operators';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent implements OnInit {

  color$;
  colorPalettes = [
    'hsl(14, 100%, 53%)',
    'hsl(48, 100%, 67%)',
    'hsl(141, 71%, 48%)',
    'hsl(171, 100%, 41%)',
    'hsl(204, 86%, 53%)',
    'hsl(217, 71%, 53%)',
    'hsl(271, 100%, 71%)',
    'hsl(348, 100%, 61%)'
  ];

  ngOnInit() {
    this.color$ = of({}).pipe(
      mergeMap(() => of(this.randomShadow(this.colorPalettes)).pipe(
        delay(this.randomDelay()))
      ),
      repeat()
    );
  }

  private randomShadow(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  private randomDelay() {
    return Math.floor((Math.random() * 2500) + 1000);
  }
}
