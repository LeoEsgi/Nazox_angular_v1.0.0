import { Component, OnInit } from '@angular/core';

import { productList } from './data';
import { ProductModel } from './products.model';

import { Options } from 'ng5-slider';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  productList: ProductModel[];

  public products: ProductModel[] = [];

  pricevalue = 250;
  minVal = 100;
  maxVal = 800;
  priceoption: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number): string => {
      return '$' + value;
    },
  };

  isCollapsed: boolean;
  collapsed: boolean;
  collapsed3: boolean;

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Product', active: true }];
    this.products = Object.assign([], productList);

    this.isCollapsed = true;
    this.collapsed = true;
    this.collapsed3 = true;

    this.productList = productList;
  }

  /**
   * search the record
   * @param e element
   */
  searchFilter(e) {
    const searchStr = e.target.value;
    this.products = productList.filter((product) => {
      return product.name.toLowerCase().search(searchStr.toLowerCase()) !== -1;
    });
  }

  /***
   * slider change fetch the record
   */
  valueChange(value: number, boundary: boolean): void {
    if (boundary) {
      this.minVal = value;
    } else {
      this.maxVal = value;
      this.products = productList.filter(function(product) {
        return product.disRate <= value && product.disRate >= this;
      }, this.minVal);
    }
  }
}
