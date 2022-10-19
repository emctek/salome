import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificacionesBajasInDiPageRoutingModule } from './modificaciones-bajas-in-di-routing.module';

import { ModificacionesBajasInDiPage } from './modificaciones-bajas-in-di.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificacionesBajasInDiPageRoutingModule
  ],
  declarations: [ModificacionesBajasInDiPage]
})
export class ModificacionesBajasInDiPageModule {}
