import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
import { MobileDetails } from '../../model/mobile-details';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})
export class MobileListComponent implements OnInit {
  mobiles: MobileDetails[];
  filteredMobiles: MobileDetails[];
  errorMessage: string;
  _listFilter: string;
  get listFilter() {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMobiles = this.listFilter ? this.performFilter(this.listFilter) : this.mobiles; }

  constructor(private _mobileService: MobileService) { }
  ngOnInit() {
    this._mobileService.getMobiles().subscribe(mobiles => {
      this.mobiles = mobiles;
      this.filteredMobiles = mobiles;
    },
      error => this.errorMessage = <any>error);
  }
  performFilter(filterBy: string): MobileDetails[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.mobiles.filter((mobile: MobileDetails) =>
          mobile.DeviceName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

}
