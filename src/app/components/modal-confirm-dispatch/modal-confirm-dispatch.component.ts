import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-entry',
  templateUrl: './modal-confirm-dispatch.component.html',
  styleUrls: ['./modal-confirm-dispatch.component.css']
})
export class ModalConfirmDispatch implements OnInit {

  @Input() licencePlate:string;
  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  confirmDispatch(){
    this.activeModal.close(true);
  }

}
