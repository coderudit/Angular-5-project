import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MobileDetails } from '../../model/mobile-details';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-mobile-viewdetail',
  templateUrl: './mobile-viewdetail.component.html',
  styleUrls: ['./mobile-viewdetail.component.css']
})
export class MobileViewdetailComponent implements OnInit {
  deviceOrder: number;
  mobile: MobileDetails;
  errorMessage: string;
  constructor(private route: ActivatedRoute, private service: MobileService, private router: Router) { }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id: number = <number>params['id'];
      this.getDetails(id);
    });
}
getDetails(id: number) {
  this.service.getMobile(id).subscribe((result) => {
    this.mobile = result;
  });
}
AddToCart(mobile: MobileDetails) {
  let mycart = localStorage.getItem('UserInfo') || JSON.stringify([]);
  let cart = JSON.parse(mycart);
  let item = cart.find(ele => ele.DeviceOrder === mobile.DeviceOrder);
  let itemIndex = cart.findIndex(ele => ele.DeviceOrder === mobile.DeviceOrder);   
  if (!item) {
     cart.push(mobile);
     mobile.NumberOfOrders = 1;
     localStorage.setItem('UserInfo', JSON.stringify(cart));
  } else {
      item.NumberOfOrders += 1;
      cart[itemIndex] = item;
      localStorage.setItem('UserInfo', JSON.stringify(cart)); }
  }
}