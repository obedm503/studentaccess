import { Component, Input } from '@angular/core';

@Component({
  selector: 'grade-badge',
  template: `
    <ion-badge [hidden]="!avg" [ngClass]="background(avg)">
      {{ avg }}
    </ion-badge>
  `,
})
export class GradeBadge {
  @Input('grade')
  avg: string | null;

  background(avg: string | null): string {
    if (!avg) {
      return '';
    }
    return `${GradeBadge.color(Number.parseFloat(avg))}-background`;
  }

  static color(avg: number): string {
    if (avg >= 95) {
      return 'best';
    }
    if (avg >= 80) {
      return 'good';
    }
    if (avg >= 60) {
      return 'bad';
    }
    return 'fail';
  }
}
