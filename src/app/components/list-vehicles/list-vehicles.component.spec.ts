import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVehiclesComponent } from './list-vehicles.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BreakPointComponent } from '../break-point/break-point.component';
import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

describe('ListVehiclesComponent', () => {
  let component: ListVehiclesComponent;
  let fixture: ComponentFixture<ListVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListVehiclesComponent, BreakPointComponent],
      providers: [ViewContainerRef]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [BreakPointComponent]
      }
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
