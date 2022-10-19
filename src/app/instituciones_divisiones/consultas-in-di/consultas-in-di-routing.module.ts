import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultasInDiPage } from './consultas-in-di.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultasInDiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultasInDiPageRoutingModule {}
