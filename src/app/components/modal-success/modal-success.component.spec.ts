import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalSuccessComponent } from './modal-success.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


describe('ModalSuccessComponent', () => {
  let component: ModalSuccessComponent;
  let fixture: ComponentFixture<ModalSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSuccessComponent],
      providers: [NgbActiveModal]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Money Masked Method', () => {
    component.bill = '1000'
    expect(component.billMasked).toEqual('COP 1,000.00')
  });

  it('Money Masked on UI', () => {
    component.bill = '1000'
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('COP 1,000.00');
  });
});
