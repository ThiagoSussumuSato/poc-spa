import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-buttom',
  templateUrl: './cart-buttom.component.html',
  styleUrls: ['./cart-buttom.component.css']
})
export class CartButtomComponent implements OnInit {

  qtdProduto: number;

  constructor() { }

  ngOnInit() {
    this.qtdProduto = 12;
  }

}
