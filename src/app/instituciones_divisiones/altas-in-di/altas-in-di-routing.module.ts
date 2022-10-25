import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltasInDiPage } from './altas-in-di.page';
import { MenuComponent } from '../menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: AltasInDiPage
  },
  {
    path: 'Menu',
    component: MenuComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltasInDiPageRoutingModule {}
