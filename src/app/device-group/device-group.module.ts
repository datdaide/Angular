import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarListDeviceGroupComponent } from './sidebar-list-device-group/sidebar-list-device-group.component';

@NgModule({
  declarations: [SidebarListDeviceGroupComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarListDeviceGroupComponent
  ]
})
export class DeviceGroupModule { }
