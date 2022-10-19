import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from '../cabecera/cabecera.component';
import { IonicModule } from '@ionic/angular';
import { PieComponent } from '../pie/pie.component';
import { MenuComponent } from '../menu/menu.component';
import { NuevainstitucionComponent } from '../nuevainstitucion/nuevainstitucion.component';
import { NuevadivisionComponent } from '../nuevadivision/nuevadivision.component';



@NgModule({
  declarations: [
    CabeceraComponent,
    PieComponent,
    MenuComponent,
    NuevainstitucionComponent,
    NuevadivisionComponent
    ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    CabeceraComponent,
    PieComponent,
    MenuComponent,
    NuevainstitucionComponent,
    NuevadivisionComponent
  ]
})
export class ComponentesModule { }
