import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceListTableComponent } from './device-list-table/device-list-table.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ 
    DeviceListTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    DeviceListTableComponent
  ]
})
export class DeviceModule { }
