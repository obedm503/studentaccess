import { Component, Input } from '@angular/core';

@Component({
  selector: 'grade-badge',
  template: `
    <ion-badge [hidden]="!grade" [ngClass]="background(grade)">
      {{ grade }}
    </ion-badge>
  `,
})
export class GradeBadge {
  @Input()
  grade: string | null;

  static color(grade: number): string {
    if (grade >= 95) {
      return 'best';
    }
    if (grade >= 80) {
      return 'good';
    }
    if (grade >= 60) {
      return 'bad';
    }
    return 'fail';
  }

  background(grade: string | null): string {
    if (!grade) {
      return '';
    }
    return `${GradeBadge.color(Number.parseFloat(grade))}-background`;
  }
}
