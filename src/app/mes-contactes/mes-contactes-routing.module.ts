import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesContactesPage } from './mes-contactes.page';

const routes: Routes = [
  {
    path: '',
    component: MesContactesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesContactesPageRoutingModule {}
