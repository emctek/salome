import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltasInDiPageRoutingModule } from './altas-in-di-routing.module';

import { AltasInDiPage } from './altas-in-di.page';
import { ComponentesModule } from '../componentes/componentes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltasInDiPageRoutingModule,
    ComponentesModule
  ],
  declarations: [AltasInDiPage]
})
export class AltasInDiPageModule {}AnimationEffect
