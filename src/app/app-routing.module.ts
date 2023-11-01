import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'lmdr',
    loadChildren: ()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'**',
    redirectTo:'lmdr'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
