import { Component, OnInit } from '@angular/core';
import { IDevice } from 'src/app/shared/models/device.model';
import { DeviceService } from 'src/app/core/http/device/device.service';
import { Pagination } from 'src/app/shared/models/pagination.model';



@Component({
  selector: 'd-device-list-table',
  templateUrl: './device-list-table.component.html',
  styleUrls: ['./device-list-table.component.css']
})

export class DeviceListTableComponent implements OnInit{
  
  title : string = "Devices";
  devices : IDevice[];
  filteredDevices : IDevice[] = [];
  pagination : Pagination = new Pagination(0,0,0,0) ;
  _filterString : string;
  get filterString():string{
    return this._filterString;
  }
  set filterString(value:string){
    this._filterString = value;
    this.filteredDevices = this.filteredDevices ? this.performFilter(this.filterString) : this.devices;
  }



  constructor(private deviceService : DeviceService){}
  
  performFilter(filterString:string): IDevice[]{
    filterString = filterString.toLocaleLowerCase();
    return this.devices.filter((device : IDevice) => device.deviceName.toLocaleLowerCase().indexOf(filterString) !== -1);
  }

  wholeCheckboxControlChange(e) : void {
    console.log("wholeCheckboxControlChange");
    for(let device of this.filteredDevices){
      device.isChecked = e.target.checked
    }
  }

  ngOnInit(): void {
    this.devices = this.deviceService.getDevices();
    this.filteredDevices = this.devices;
  }

  paginationChangesReceiver(pagModel :Pagination) : void{
    this.pagination = pagModel;
  }

}
