import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltasInDiPage } from './altas-in-di.page';

const routes: Routes = [
  {
    path: '',
    component: AltasInDiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltasInDiPageRoutingModule {}
