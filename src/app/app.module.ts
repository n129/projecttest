import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//NEW IMPORTS
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { UserService } from './login/user.service';
import { ItemService } from './store/item.service';
import { PlanService } from './store/plan.service';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './login/login.component';
import { StoreComponent } from './store/store.component';
import { FilterPipe } from './filter.pipe';
import { PlanFilterPipe } from './search-plans/file-plans.pipe';
import { SearchItemsComponent } from './search-items/search-items.component';
import { SearchPlansComponent } from './search-plans/search-plans.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { ProfileComponent } from './profile/profile.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PlanPageComponent } from './plan-page/plan-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SearchToolsComponent } from './search-tools/search-tools.component';
import { ToolPageComponent } from './tool-page/tool-page.component';
import { UploadItemComponent } from './upload-item/upload-item.component'

@NgModule({
  declarations: [
    AppComponent, 
    SignupComponent, 
    HomeComponent, 
    DefaultComponent, 
    LoginComponent,
    StoreComponent,
    FilterPipe,
    PlanFilterPipe,
    SearchItemsComponent,
    SearchPlansComponent,
    CartComponent,
    ProfileComponent,
    ItemPageComponent,
    PlanPageComponent,
    CheckoutComponent,
    SearchToolsComponent,
    ToolPageComponent,
    UploadItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //ADD THESE
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '' , redirectTo:'default', pathMatch:'full'},
      {path: 'login' , component : LoginComponent},
      {path: 'home' , component : HomeComponent},
      {path: 'default' , component : DefaultComponent},
      {path: 'signup' , component : SignupComponent},
      {path: 'search-items' , component : SearchItemsComponent},
      {path: 'search-plans' , component : SearchPlansComponent},
      {path: 'store' , component : StoreComponent},
      {path: 'cart' , component : CartComponent},
      {path: 'profile' , component : ProfileComponent},
      {path: 'item-page/:id' , component : ItemPageComponent},
      {path: 'plan-page/:id' , component : PlanPageComponent},
      {path: 'checkout' , component : CheckoutComponent},
      {path: 'search-tools' , component : SearchToolsComponent},
      {path: 'tool-page' , component : ToolPageComponent},
      {path: 'upload-item' , component : UploadItemComponent}
    ])
  ],
  providers: [UserService, ItemService, PlanService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
