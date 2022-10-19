import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificacionesBajasInDiPage } from './modificaciones-bajas-in-di.page';

const routes: Routes = [
  {
    path: '',
    component: ModificacionesBajasInDiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificacionesBajasInDiPageRoutingModule {}
