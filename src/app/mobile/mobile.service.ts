import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { MobileDetails } from '../model/mobile-details';
const mobilesData = [
    {
        'DeviceName': 'iPhone 7',
        'DevicePrice': 800,
        'DeviceImgSrc': './assets/images/Apple-iPhone-7-Plus-0.jpg',
        'DeviceOrder': 1,
        'ModelNumber': 'Apple',
        'Colors': ['Red', 'Blue'],
        'ScreenSize': 5,
        'OperatingSystem': '11.0.2',
        'RAM': 4,
        'Storage': 128,
        'NumberOfOrders': 0
    },
    {
        'DeviceName': 'Pixel 2',
        'DevicePrice': 600,
        'DeviceImgSrc': './assets/images/51V4nGNPIcL._SX425_.jpg',
        'DeviceOrder': 2,
        'ModelNumber': 'Google',
        'Colors': ['Red', 'Green'],
        'ScreenSize': 6,
        'OperatingSystem': 'Oreo',
        'RAM': 8,
        'Storage': 64,
        'NumberOfOrders': 0
    },
    {
        'DeviceName': 'HTC One',
        'DevicePrice': 700,
        'DeviceImgSrc': './assets/images/91NtH6M1OmL._SL1500_.jpg',
        'DeviceOrder': 3,
        'ModelNumber': 'HTC',
        'Colors': ['White', 'Black'],
        'ScreenSize': 5.5,
        'OperatingSystem': 'Marshmellow',
        'RAM': 8,
        'Storage': 256,
        'NumberOfOrders': 0
    }
];
@Injectable()
export class MobileService {
  private _mobileUrl = './api/mobiles.json';
  constructor(private _http: HttpClient) { }
   getMobiles(): Observable<MobileDetails[]> {
       return new Observable((observer) => {
           observer.next(mobilesData);
       });
  }

   getMobile(deviceOrder: number): any {
       return new Observable((observer) => {
            const mobile = mobilesData.find((item) => {
                return deviceOrder == item.DeviceOrder;
            });
            if (!mobile) {
                observer.error(new Error('Not Found'));
                return;
            }
            observer.next(mobile);
       });
      /*return this.getMobiles()
      .map((mobiles: MobileDetails[]) => mobiles.find(m => m.DeviceOrder === deviceOrder));*/
  }
  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
}
}
