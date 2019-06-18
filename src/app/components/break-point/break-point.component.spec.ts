import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakPointComponent } from './break-point.component';

describe('BreakPointComponent', () => {
  let component: BreakPointComponent;
  let fixture: ComponentFixture<BreakPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
