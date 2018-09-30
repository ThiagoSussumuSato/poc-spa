
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Checkout } from './checkout';

const API = 'https://.../';

@Injectable({ providedIn: 'root'})
export class CheckoutService {

    constructor(private http: HttpClient) {}

    efetivarPagamento(pagamento: Checkout) {
        return this.http.post(API + 'efetivar', pagamento);
    }

}