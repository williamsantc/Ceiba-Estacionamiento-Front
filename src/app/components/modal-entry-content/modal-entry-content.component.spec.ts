import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEntryContentComponent } from './modal-entry-content.component';

describe('ModalEntryContentComponent', () => {
  let component: ModalEntryContentComponent;
  let fixture: ComponentFixture<ModalEntryContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEntryContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEntryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
