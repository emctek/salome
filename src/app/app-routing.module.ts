import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'altas-in-di',
    pathMatch: 'full'
  },
  {
    path: 'altas-in-di',
    loadChildren: () => import('./instituciones_divisiones/altas-in-di/altas-in-di.module').then( m => m.AltasInDiPageModule)
  },
  {
    path: 'modificaciones-bajas-in-di',
    // eslint-disable-next-line max-len
    loadChildren: () => import('./instituciones_divisiones/modificaciones-bajas-in-di/modificaciones-bajas-in-di.module').then( m => m.ModificacionesBajasInDiPageModule)
  },
  {
    path: 'consultas-in-di',
    loadChildren: () => import('./instituciones_divisiones/consultas-in-di/consultas-in-di.module').then( m => m.ConsultasInDiPageModule)
  },
];

@NgModule({


  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
