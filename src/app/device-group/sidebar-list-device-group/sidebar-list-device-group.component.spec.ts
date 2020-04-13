import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarListDeviceGroupComponent } from './sidebar-list-device-group.component';

describe('SidebarListDeviceGroupComponent', () => {
  let component: SidebarListDeviceGroupComponent;
  let fixture: ComponentFixture<SidebarListDeviceGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarListDeviceGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarListDeviceGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
