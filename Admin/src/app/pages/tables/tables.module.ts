import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UiModule } from '../../shared/ui/ui.module';
import { NgbPaginationModule, NgbTypeaheadModule, NgbDropdownModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { TablesRoutingModule } from './tables-routing.module';
import { AdvancedSortableDirective } from './advancedtable/advanced-sortable.directive';
import { BasicComponent } from './basic/basic.component';
import { AdvancedtableComponent } from './advancedtable/advancedtable.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ResizableModule } from 'angular-resizable-element';

@NgModule({
  declarations: [BasicComponent, AdvancedtableComponent, AdvancedSortableDirective],
  imports: [
    NgbProgressbarModule,
    CommonModule,
    TablesRoutingModule,
    UiModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    DragDropModule,
    ResizableModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    FormsModule
  ]
})
export class TablesModule { }
