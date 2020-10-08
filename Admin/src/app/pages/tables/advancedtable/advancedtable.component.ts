import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Table } from './advanced.model';
import { AdvancedService } from './advanced.service';
import { AdvancedSortableDirective, SortEvent } from './advanced-sortable.directive';
import { ActivatedRoute } from '@angular/router';
import * as charts from './data';
import { ChartType } from '../../chart/echart/echart.model';
import { ResizeEvent } from 'angular-resizable-element';
import { CdkDragEnd, CdkDragStart } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-advancedtable',
  templateUrl: './advancedtable.component.html',
  styleUrls: ['./advancedtable.component.scss'],
  providers: [AdvancedService, DecimalPipe]
})

export class AdvancedtableComponent implements OnInit, AfterViewInit {

  // bread crum data
  breadCrumbItems: Array<{}>;
  hideme: boolean[] = [];

  gaugeChartPEC: ChartType;
  gaugeChartTR90: ChartType;
  gaugeChartTauxAbandon: ChartType;
  gaugeChartTauxAppelTransfert: ChartType;
  barChartAppelEnCours: ChartType;
  barChartAppelDistrib: ChartType;
  barChartAppelVolume: ChartType;
  activite: string;
  flux: string;
  grpFlux: string;
  currentElem: string;
  tables$: Observable<Table[]>;
  total$: Observable<number>;

  isFlux: boolean;
  isActivite: boolean;
  isGrpFlux: boolean;
  isIntraday: boolean;
  isSite: boolean;
  myStorage = window.localStorage;

  @ViewChildren(AdvancedSortableDirective) headers: QueryList<AdvancedSortableDirective>;

  // tslint:disable-next-line: align
  constructor(public service: AdvancedService, private route: ActivatedRoute) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.activite = params.get('activite');
      this.grpFlux = params.get('grpFlux');
      this.flux = params.get('flux');
      if (this.flux != null && (this.activite != null || this.grpFlux != null)) {
        if (this.grpFlux != null) {
          this.breadCrumbItems = [{ label: this.grpFlux, link: '/advanced/grpFlux/' + this.grpFlux }, {
            label: this.flux,
            active: true
          }];
        } else if (this.activite != null) {
          this.breadCrumbItems = [{ label: this.activite, link: '/advanced/activite/' + this.activite }, {
            label: this.flux,
            active: true
          }];
        }

        this.currentElem = ' du flux : "' + this.flux + '"';
        this.isActivite = false;
        this.isFlux = true;
        this.isGrpFlux = false;
      } else if (this.flux == null && this.activite != null) {
        this.breadCrumbItems = [{ label: this.activite, active: true }];
        this.currentElem = ' de l\'activité : "' + this.activite + '"';
        this.isActivite = true;
        this.isGrpFlux = false;
        this.isFlux = false;
      } else if (this.flux == null && this.activite == null && this.grpFlux != null) {
        this.breadCrumbItems = [{ label: this.grpFlux, active: true }];
        this.currentElem = ' du groupe de flux : "' + this.grpFlux + '"';
        this.isActivite = true;
        this.isGrpFlux = false;
        this.isFlux = false;
      } else {
        this.isSite = true;
      }

      this.isIntraday = false;
    });

    /**
     * fetch data
     */
    this._fetchData();
  }

  ngAfterViewInit() {

    const elem = [document.getElementById('gaugeChartPEC'),
    document.getElementById('gaugeChartTR90'),
    document.getElementById('gaugeChartPEC2'),
    document.getElementById('gaugeChartTR902'),
    document.getElementById('barChartAppelEnCours'),
    document.getElementById('barChartAppelVolume'),
    document.getElementById('barChartAppelDistrib'),
    document.getElementById('tableFlux')];
    const size = elem.length;
    for (let i = 0; i < size; i++) {
      // tslint:disable-next-line: radix
      const x = (this.myStorage.getItem(elem[i].id + '_left'));
      // tslint:disable-next-line: radix
      const y = (this.myStorage.getItem(elem[i].id + '_top'));
      if (x != null && y != null) {
        elem[i].style.position = 'relative';
        elem[i].style.left = x + 'px';
        elem[i].style.top = y + 'px';
      } else {
        elem[i].style.position = 'relative';
        elem[i].style.left = 0 + 'px';
        elem[i].style.top = 0 + 'px';
        elem[i].style.transform = '';

      }
    }

  }

  resetPosition() {
    this.myStorage.clear();
    // window.location.reload();
    this.ngAfterViewInit();

  }

  changeValue(i) {
    this.hideme[i] = !this.hideme[i];
  }

  /**
   * fetches the table value
   */
  _fetchData() {
    this.gaugeChartPEC = charts.gaugeChartPEC;
    this.gaugeChartTR90 = charts.gaugeChartTR90;
    this.gaugeChartTauxAppelTransfert = charts.gaugeChartPEC;
    this.gaugeChartTauxAbandon = charts.gaugeChartTR90;
    this.gaugeChartPEC.series[0].data[0].value = this.getRandomInt(100);
    this.gaugeChartTR90.series[0].data[0].value = this.getRandomInt(100);

    this.barChartAppelEnCours = charts.barChartAppelEnCours;
    this.barChartAppelDistrib = charts.barChartAppelDistrib;
    this.barChartAppelVolume = charts.barChartAppelVolume;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
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

  onResizeEnd(event: ResizeEvent): void {
    console.log('Element was resized', event);
  }

  changeDisplay() {

    if (this.isIntraday === false) {
      this.isIntraday = true;
    } else {
      this.isIntraday = false;
      setTimeout(() => { this.ngAfterViewInit(); }, 1);

    }

  }

  // when element has been drag and dropped
  dragEnd(event: CdkDragEnd) {
    const relativePos = {};
    const elem = event.source.element;
    const parentPos = elem.nativeElement.parentElement.getBoundingClientRect();

    if (elem.nativeElement.style.left !== '') {
      // tslint:disable-next-line: radix
      const elemLeft = parseInt(elem.nativeElement.style.transform.substring(12).split(',')[0].replace('px', ''))
        // tslint:disable-next-line: radix
        + parseInt(elem.nativeElement.style.left.replace('px', ''));
      this.myStorage.setItem(elem.nativeElement.id + '_left', elemLeft.toString());
    } else {
      // tslint:disable-next-line: radix
      const elemLeft = parseInt(elem.nativeElement.style.transform.substring(12).split(',')[0].replace('px', ''));
      this.myStorage.setItem(elem.nativeElement.id + '_left', elemLeft.toString());
    }
    // tslint:disable-next-line: radix
    if (elem.nativeElement.style.top !== '') {
      // tslint:disable-next-line: radix
      const elemTop = parseInt(elem.nativeElement.style.transform.substring(12).split(',')[1].replace('px', ''))
        // tslint:disable-next-line: radix
        + parseInt(elem.nativeElement.style.top.replace('px', ''));
      this.myStorage.setItem(elem.nativeElement.id + '_top', elemTop.toString());
    } else {
      // tslint:disable-next-line: radix
      const elemTop = parseInt(elem.nativeElement.style.transform.substring(12).split(',')[1].replace('px', ''));
      this.myStorage.setItem(elem.nativeElement.id + '_top', elemTop.toString());
    }

  }

}
