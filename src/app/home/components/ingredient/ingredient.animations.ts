import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const Animations = {
  fadeIn: trigger('fadeIn', [
    state('void', style({ transform: 'scale(0)', opacity: 0 })),
    transition('void => *', [
      animate('1s ease-out', style({ transform: 'scale(1)', opacity: 1 })),
    ]),
    transition('* => void', [
      animate('1s ease-in', style({ transform: 'scale(0)', opacity: 0 })),
    ]),
  ]),
};
