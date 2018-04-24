import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { MobileDetailComponent } from '../mobile/mobiledetail/mobile-detail.component';
import { MobileListComponent } from '../mobile/mobilelist/mobile-list.component';
import { MobileViewdetailComponent } from '../mobile/mobileviewdetail/mobile-viewdetail.component';
import { MobileService } from './mobile.service';
import { CartDetailsComponent } from '../mobile/cartdetails/cart-details.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule
  ],
  declarations: [MobileDetailComponent, MobileListComponent, MobileViewdetailComponent, CartDetailsComponent],
  providers: [MobileService]
})
export class MobileModule { }
