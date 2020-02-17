import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesContactesPageRoutingModule } from './mes-contactes-routing.module';

import { MesContactesPage } from './mes-contactes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesContactesPageRoutingModule
  ],
  declarations: [MesContactesPage]
})
export class MesContactesPageModule {}
