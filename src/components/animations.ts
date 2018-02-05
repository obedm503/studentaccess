import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

const expandTransition = ['max-height', 'opacity', 'padding', 'border', 'min-height']
  .map(prop => `${prop} 250ms cubic-bezier(0.420, 0.000, 0.580, 1.000)`)
  .join(', ');

export const expand = trigger('expand', [
  state('true', style({
    maxHeight: '10em',
    opacity: '1',
    padding: '',
    border: '',
    minHeight: '',
    transition: expandTransition,
  })),
  state('false', style({
    maxHeight: '0',
    opacity: '.7',
    padding: '0',
    border: 'none',
    minHeight: '0',
    transition: expandTransition,
  })),
  transition('* <=> *', animate('250ms'))
]);
