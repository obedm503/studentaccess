import { Component, Input } from '@angular/core';

@Component({
  selector: 'grade-badge',
  template: `
    <ion-badge
      [hidden]="!avg"
      [class.fail-background]="avg <= 60"
      [class.bad-background]="avg > 60 && avg < 80"
      [class.good-background]="avg >= 80 && avg < 95"
      [class.best-background]="avg >= 95"
    >
      {{ avg }}
    </ion-badge>
  `,
})
export class GradeBadge {
  @Input('grade')
  avg: number;
}
