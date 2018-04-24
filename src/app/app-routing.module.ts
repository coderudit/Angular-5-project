import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MobileListComponent } from './mobile/mobilelist/mobile-list.component';
import { MobileViewdetailComponent } from './mobile/mobileviewdetail/mobile-viewdetail.component';
import { CartDetailsComponent } from './mobile/cartdetails/cart-details.component';
import { Middleware } from './services/middleware';

const routes: Routes = [
   {path : 'login', component: LoginComponent},
   {path : 'mobilelist', component: MobileListComponent},
   {path : 'mobilelist/:id', component: MobileViewdetailComponent},
   {path: 'cartdetails', component: CartDetailsComponent, canActivate: [Middleware]},
   {path : '', redirectTo: '/login', pathMatch: 'full'},
   {path : '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
