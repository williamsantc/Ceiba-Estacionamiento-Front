import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmDispatch } from './modal-confirm-dispatch.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('ModalConfirmDispatch', () => {
  let component: ModalConfirmDispatch;
  let fixture: ComponentFixture<ModalConfirmDispatch>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalConfirmDispatch],
      providers: [NgbActiveModal]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmDispatch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
