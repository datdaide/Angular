import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceListTableComponent } from './device-list-table.component';

describe('DeviceListTableComponent', () => {
  let component: DeviceListTableComponent;
  let fixture: ComponentFixture<DeviceListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
