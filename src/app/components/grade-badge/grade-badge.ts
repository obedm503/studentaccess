import { Component, Input } from '@angular/core';

@Component({
  selector: 'grade-badge',
  template: `
    <ion-badge [hidden]="!avg" [className]="background(avg)">
      {{ avg }}
    </ion-badge>
  `,
})
export class GradeBadge {
  @Input('grade')
  avg: number;

  background(avg: number): string {
    return `${GradeBadge.color(avg)}-background`;
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
