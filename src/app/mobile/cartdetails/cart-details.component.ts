import { Component, OnInit, OnChanges, Input, DoCheck } from '@angular/core';
import { MobileDetails } from '../../model/mobile-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit, OnChanges, DoCheck {
  pageTitle: any = 'Cart Details';
  mobileDetails: MobileDetails[] = [];
  totalPrice: number = 0;
  constructor(private router: Router) { }
  ngOnInit() {
    let mycart = localStorage.getItem('UserInfo') || JSON.stringify([]);
    let cart = <MobileDetails[]>JSON.parse(mycart);
    this.mobileDetails = cart;
    for (let mobile of this.mobileDetails) {
      this.totalPrice += mobile.NumberOfOrders * mobile.DevicePrice;
    }
  } ngOnChanges() {
    
    for (let mobile of this.mobileDetails) {
      this.totalPrice += mobile.NumberOfOrders * mobile.DevicePrice;
    }
  }
  ngDoCheck() {
    this.totalPrice = 0;
    for (let mobile of this.mobileDetails) {
      this.totalPrice += mobile.NumberOfOrders * mobile.DevicePrice;
    }
  }
   RemoveItem(mobileDetail: MobileDetails) {  
     this.mobileDetails.splice(this.mobileDetails.findIndex(ele => ele.DeviceOrder === mobileDetail.DeviceOrder), 1);
     localStorage.setItem('UserInfo', JSON.stringify(this.mobileDetails));
    }
   PlaceOrder() {
    const login = localStorage.getItem('token');
    if (login) {
     if (this.mobileDetails.length > 0) {
     alert('Order has been placed succesfully');
     localStorage.removeItem('UserInfo');
     this.router.navigate(['mobilelist']);
     }
    } else {
      this.router.navigate(['/login']);
      return false;
      }}
   }
