import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { MaintenanceComponent } from './extrapages/maintenance/maintenance.component';
import { Page404Component } from './extrapages/page404/page404.component';

import { LayoutComponent } from './layouts/layout/layout.component';

const routes: Routes = [

  /* activate if the site is under maintenance */
 /* { path: '...', component: MaintenanceComponent },
  { path: '**', redirectTo: '/...' }, */


  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  // tslint:disable-next-line: max-line-length
  { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] },
  { path: 'pages', loadChildren: () => import('./extrapages/extrapages.module').then(m => m.ExtrapagesModule), canActivate: [AuthGuard] },
  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '/404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
