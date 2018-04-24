import { Component, OnInit, Input } from '@angular/core';
import { MobileDetails } from '../../model/mobile-details';
import { UserDetails } from '../../model/user-details';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-detail',
  templateUrl: './mobile-detail.component.html',
  styleUrls: ['./mobile-detail.component.css']
})
export class MobileDetailComponent implements OnInit {
  constructor(private router: Router) { }
  @Input() mobileDetail: MobileDetails;
  ngOnInit() {  }
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
              localStorage.setItem('UserInfo', JSON.stringify(cart)); } }
    }
