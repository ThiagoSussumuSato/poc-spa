
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

const API = 'https://713a17a2-9c79-42b8-8659-fbaa3528c1e9.mock.pstmn.io/';

@Injectable({ providedIn: 'root'})
export class ProductService {

    constructor(private http: HttpClient) {}

    listProduct() {
        return this.http
        .get<Product[]>(API + 'produtos');
    }
}
