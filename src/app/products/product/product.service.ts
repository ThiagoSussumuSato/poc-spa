
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

const API = 'https://32e4dd46-7a35-41f6-8b42-7a159c3b7cb7.mock.pstmn.io/';

@Injectable({ providedIn: 'root'})
export class ProductService {

    constructor(private http: HttpClient) {}

    listProduct() {
        return this.http
        .get<Product[]>(API + 'produtos');
    }
}
