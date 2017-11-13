import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-100%)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ opacity: 0, transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class ModalComponent {
  get wrapperClasses(): string {
    return 'modal-wrapper' + (this.show ? ' show' : '');
  }

  @Input() show = true;

  constructor() { }

  close() {
    this.show = false;
  }
}
