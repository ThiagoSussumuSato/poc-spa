
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

const API = 'https://8d326e63-8af9-46b8-aaf4-e192b485c159.mock.pstmn.io/';

@Injectable({ providedIn: 'root'})
export class ProductService {

    constructor(private http: HttpClient) {}

    listProduct() {
        return this.http.get<Product[]>(API + 'produtos');
    }
}
