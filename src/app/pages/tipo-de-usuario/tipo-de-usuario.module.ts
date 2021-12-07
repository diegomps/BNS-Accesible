import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoDeUsuarioPageRoutingModule } from './tipo-de-usuario-routing.module';

import { TipoDeUsuarioPage } from './tipo-de-usuario.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoDeUsuarioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TipoDeUsuarioPage]
})
export class TipoDeUsuarioPageModule {}
