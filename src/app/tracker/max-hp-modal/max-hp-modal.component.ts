import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-max-hp-modal',
  templateUrl: 'max-hp-modal.component.html'
})
export class MaxHPModalComponent implements OnInit {
  @ViewChild('modal') modal: ModalComponent;

  constructor() { }

  ngOnInit() { }
}
