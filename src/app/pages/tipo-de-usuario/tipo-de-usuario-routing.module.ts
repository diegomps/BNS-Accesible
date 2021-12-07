import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoDeUsuarioPage } from './tipo-de-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: TipoDeUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoDeUsuarioPageRoutingModule {}
