import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-close-header',
  template: '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
})
export class ModalCloseHeaderComponent {
  constructor() { }
}
