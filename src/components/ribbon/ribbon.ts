import { Component, Input } from '@angular/core';

@Component({
  selector: 'ribbon',
  template: `
  <div class="protector">
    <div class="ribbon {{ ribbon }}">
      <div class="circle {{ circle }}">
        <span class="text">
          {{ avg }}
        </span>
      </div>
    </div>
  </div>
  `
})
export class Ribbon {
  @Input('average')
  public avg: number;
  public circle: string;
  public ribbon: string;

  ngOnChanges(changes){
    let avg = changes.avg.currentValue;
    if( avg === null ){
      this.avg = '$$.$' as any;
      this.setState('owe');
    } else if( avg <= 60 ){
      this.setState('fail');
    } else if( avg > 60 && avg < 80 ){
      this.setState('bad');
    } else if( avg >= 80 && avg < 95 ){
      this.setState('good');
    } else if( avg >= 95 ){
      this.setState('best');
    } else {
      this.avg = '??.?' as any;
      this.setState('none');
    }
  }
  setState(state){
    this.circle = `${state}-circle`;
    this.ribbon = `${state}-ribbon`;
  }
}
