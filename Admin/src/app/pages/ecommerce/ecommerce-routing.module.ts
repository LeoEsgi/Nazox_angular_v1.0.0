import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopsComponent } from './shops/shops.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'products/:id',
        component: ProductDetailComponent
    },
    {
        path: 'shops',
        component: ShopsComponent
    },
    {
        path: 'checkout',
        component: CheckoutComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'add-product',
        component: AddProductComponent
    },
    {
        path: 'customers',
        component: CustomersComponent
    },
    {
        path: 'orders',
        component: OrdersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EcommerceRoutingModule { }
