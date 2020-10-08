import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { AdvancedtableComponent } from './advancedtable/advancedtable.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

const routes: Routes = [
    {
        path: 'basic',
        component: BasicComponent
    },
    {
        path: 'advanced/activite/:activite',
        component: AdvancedtableComponent
    },
    {
        path: 'advanced/activite/:activite/flux/:flux',
        component: AdvancedtableComponent
    },
    {
        path: 'advanced/grpFlux/:grpFlux',
        component: AdvancedtableComponent
    },
    {
        path: 'advanced/grpFlux/:grpFlux/flux/:flux',
        component: AdvancedtableComponent
    },
    {
        path: 'advanced/site/:site',
        component: AdvancedtableComponent
    },
    {
        path: 'advanced/site/:site/unite/:unite',
        component: AdvancedtableComponent
    },
    {
        path: 'advanced/site/:site/unite/:unite/equipe/:equipe',
        component: AdvancedtableComponent
    },
    {
        path: 'advanced/site/:site/unite/:unite/equipe/:equipe/agent/:agent',
        component: AdvancedtableComponent
    },
    {
        path: 'advanced',
        component: AdvancedtableComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule { }
