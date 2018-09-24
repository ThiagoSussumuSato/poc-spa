import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
    {path: '', component: ProductListComponent},
    {path: 'product/:productId', component: ProductDetailComponent},
    {path: '**', component: NotFoundComponent}
]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule]
   
})

export class AppRoutingModule {}