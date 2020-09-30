import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { Order } from './orders.model';
import { ordersData } from './data';

import { OrderSortableDirective, SortEvent } from './orders-sortable.directive';
import { OrderService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [OrderService, DecimalPipe]

})
export class OrdersComponent implements OnInit {

  @ViewChildren(OrderSortableDirective) headers: QueryList<OrderSortableDirective>;

  // breadcrumb items
  breadCrumbItems: Array<{}>;

  // Table data
  ordersData: Order[];

  tables$: Observable<Order[]>;
  total$: Observable<number>;

  constructor(public service: OrderService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Orders', active: true }];

    /**
     * fetch data
     */
    this._fetchData();
  }

  /**
   * fetches the table value
   */
  _fetchData() {
    this.ordersData = ordersData;
  }

  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
