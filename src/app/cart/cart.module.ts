import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartButtomComponent } from './cart-buttom/cart-buttom.component';
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CartButtomComponent
  ],
  declarations: [CartButtomComponent, CartListComponent]
})
export class CartModule { }
