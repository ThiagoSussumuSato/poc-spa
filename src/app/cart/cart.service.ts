import { Injectable } from '@angular/core';
import { Product } from '../products/product/product';

@Injectable({providedIn: 'root'})
export class CartService {

  produtos: Product[];

  constructor() {}

  obterQuantidadeProduto(): number {
    return this.produtos.length;
  } 

  addProduto(produto: Product): void {
    this.produtos.push(produto);
  }

}
