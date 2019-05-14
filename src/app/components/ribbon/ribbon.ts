import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'ribbon',
  template: `
    <div class="protector">
      <div class="ribbon {{ ribbon }}">
        <div class="circle {{ circle }}">
          <span class="text">
            {{ average }}
          </span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['ribbon.scss'],
})
export class Ribbon implements OnChanges {
  @Input()
  average: number;
  circle: string;
  ribbon: string;

  ngOnChanges(changes) {
    const avg: number = changes.average.currentValue;

    if (avg === null) {
      this.average = '$$.$' as any;
      this.setState('owe');
    } else if (avg <= 60) {
      this.setState('fail');
    } else if (avg > 60 && avg < 80) {
      this.setState('bad');
    } else if (avg >= 80 && avg < 95) {
      this.setState('good');
    } else if (avg >= 95) {
      this.setState('best');
    } else {
      this.average = '??.?' as any;
      this.setState('none');
    }
  }

  setState(state) {
    this.circle = `${state}-circle`;
    this.ribbon = `${state}-ribbon`;
  }
}
