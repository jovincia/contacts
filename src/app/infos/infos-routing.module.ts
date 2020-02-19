import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { infosPage } from './infos.page';

const routes: Routes = [
  {
    path: '',
    component: infosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfosPageRoutingModule {}
