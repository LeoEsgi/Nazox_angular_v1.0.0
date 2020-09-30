import { Component, OnInit } from '@angular/core';

import { Cart } from './cart.model';

import { cartData } from './data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
/**
 * Ecommerce Cart component
 */
export class CartComponent implements OnInit {

  // breadcrumb items
  breadCrumbItems: Array<{}>;

  cartData: Cart[];

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Cart', active: true }];
    /**
     * fetch data
     */
    this._fetchData();
  }

  /**
   * Cart data fetch
   */
  private _fetchData() {
    this.cartData = cartData;
  }
}
