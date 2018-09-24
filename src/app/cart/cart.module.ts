import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartButtomComponent } from './cart-buttom/cart-buttom.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CartButtomComponent
  ],
  declarations: [CartButtomComponent]
})
export class CartModule { }
