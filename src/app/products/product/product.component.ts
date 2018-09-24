import { Input, Component } from '@angular/core';

@Component({
    selector: 'ap-product',
    templateUrl: 'product.component.html'
})

export class ProductComponent {
    @Input() description = '';
    @Input() img = '';
}