import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { moneyMask } from 'src/app/util/StringUtils';
import { Mask } from 'src/app/models/Mask';

@Component({
  selector: 'app-modal-success',
  templateUrl: './modal-success.component.html',
  styleUrls: ['./modal-success.component.css']
})
export class ModalSuccessComponent implements OnInit {

  @Input() bill: string;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  get billMasked() {
    const mask: Mask = new Mask('COP ', ',', '.', 2, null)
    return moneyMask(this.bill, mask)
  }

}
