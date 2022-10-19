import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultasInDiPageRoutingModule } from './consultas-in-di-routing.module';

import { ConsultasInDiPage } from './consultas-in-di.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultasInDiPageRoutingModule
  ],
  declarations: [ConsultasInDiPage]
})
export class ConsultasInDiPageModule {}
