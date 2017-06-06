import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const expand = trigger('expand', [
  state('true', style({
    maxHeight: '10em',
    opacity: '1',
    padding: '',
    border: '',
    minHeight: '',
    transition: 'all 250ms cubic-bezier(0.420, 0.000, 0.580, 1.000)'
  })),
  state('false', style({
    maxHeight: '0',
    opacity: '.7',
    padding: '0',
    border: 'none',
    minHeight: '0',
    transition: 'all 250ms cubic-bezier(0.420, 0.000, 0.580, 1.000)'
  })),
  transition('void => *', animate('0s')),
  transition('* <=> *', animate('250ms ease-in-out'))
]);
