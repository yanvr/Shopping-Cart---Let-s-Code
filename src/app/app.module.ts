import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

registerLocaleData(ptBr);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderNavbarComponent } from './header/header-navbar/header-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './home/products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutItemComponent } from './checkout/checkout-item/checkout-item.component';
import { CheckoutOrderComponent } from './checkout/checkout-order/checkout-order.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ErrorMessageComponent } from './user-register/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    CheckoutItemComponent,
    CheckoutOrderComponent,
    UserRegisterComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt"},
    { provide: DEFAULT_CURRENCY_CODE, useValue: "BRL"}
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
