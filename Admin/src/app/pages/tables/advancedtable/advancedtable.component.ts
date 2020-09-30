import { ProgressbarComponent } from './../../ui/progressbar/progressbar.component';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';
import { Table } from './advanced.model';

import { AdvancedService } from './advanced.service';
import { AdvancedSortableDirective, SortEvent } from './advanced-sortable.directive';
import { ActivatedRoute } from '@angular/router';
import { gaugeChartPEC, gaugeChartTR90 } from './data';
import { ChartType } from '../../chart/echart/echart.model';
import { ChartModule } from '../../chart/chart.module';

@Component({
  selector: 'app-advancedtable',
  templateUrl: './advancedtable.component.html',
  styleUrls: ['./advancedtable.component.scss'],
  providers: [AdvancedService, DecimalPipe]
})


/**
 * Advanced table component
 */

export class AdvancedtableComponent implements OnInit  {
  // bread crum data
  breadCrumbItems: Array<{}>;
  hideme: boolean[] = [];

  gaugeChartPEC: ChartType;
  gaugeChartTR90: ChartType;
  param: string;
  tables$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(AdvancedSortableDirective) headers: QueryList<AdvancedSortableDirective>;

  // tslint:disable-next-line: align
  constructor(public service: AdvancedService, private route: ActivatedRoute) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.param = params.get("id")
    });
    this.breadCrumbItems = [{ label: 'Tables' }, { label: 'Advanced Table', active: true }];

    /**
     * fetch data
     */
    this._fetchData();
  }


  changeValue(i) {
    this.hideme[i] = !this.hideme[i];
  }

  /**
   * fetches the table value
   */
  _fetchData() {
    this.gaugeChartPEC = gaugeChartPEC;
    this.gaugeChartTR90 = gaugeChartTR90;
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
