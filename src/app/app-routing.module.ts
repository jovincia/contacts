import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'mes-contactes',
    loadChildren: () => import('./mes-contactes/mes-contactes.module').then( m => m.MesContactesPageModule)
  },
  {
    path: 'infos/:id',
    loadChildren: () => import('./infos/infos.module').then( m => m.InfosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
