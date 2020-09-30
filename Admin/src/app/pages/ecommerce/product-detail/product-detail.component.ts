import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductModel } from '../products/products.model';
import { productList } from '../products/data';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productDetail: ProductModel[];

  // breadcrumb items
  breadCrumbItems: Array<{}>;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params =>
      this.productDetail = productList.filter((product) => {
        // tslint:disable-next-line: radix
        return product.id === parseInt(params.id);
      })
    );
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Product Detail', active: true }];
  }
}
