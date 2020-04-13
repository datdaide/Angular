import { Injectable } from '@angular/core';
import { IDevice } from 'src/app/shared/models/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  getDevices(): IDevice[]{
    return [{
      deviceName : "DataCollection 0001",
      manufacturer :"samsung",
      model:"SM-T350",
      os : "6.0.1",
      battery : 98,
      memory : 6.2,
      memoryCapacity : 7.8,
      phoneNumber : null,
      username : null,
      macAddress : ""
    },
    {
      deviceName : "DataCollection 0002",
      manufacturer :"samsung",
      model:"SM-T350",
      os : "6.0.1",
      battery : 98,
      memory : 6.2,
      memoryCapacity : 7.8,
      phoneNumber : null,
      username : null,
      macAddress : ""
    },
    {
      deviceName : "DataCollection 0003",
      manufacturer :"samsung",
      model:"SM-T350",
      os : "6.0.1",
      battery : 50,
      memory : 6.2,
      memoryCapacity : 7.8,
    }]
  }

}
