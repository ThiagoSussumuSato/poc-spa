import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../products/product/product';

@Injectable({providedIn: 'root'})
export class CartService {

  private produtos: Product[] = [];
  update: BehaviorSubject<boolean> = new BehaviorSubject(true);
  qtd: number;

  constructor() {}

  obterQuantidadeProduto(): number {
    return this.produtos.length;
    // return ;
  } 

  addProduto(produto: Product): void {
    console.log(produto);
    this.produtos.push(produto);
  }

  obterValorTotal(): number {
    let sum: number = 0;
    this.produtos.forEach(produto => {
      sum += produto.valor;
      console.log(sum);
    });

    return sum;
  }

  obterProdutos(): Product[] {
    return this.produtos;
  }


}
