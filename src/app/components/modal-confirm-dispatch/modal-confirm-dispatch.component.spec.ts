import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmDispatch } from './modal-confirm-dispatch.component';

describe('ModalConfirmDispatch', () => {
  let component: ModalConfirmDispatch;
  let fixture: ComponentFixture<ModalConfirmDispatch>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConfirmDispatch ]
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
