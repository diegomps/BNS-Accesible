import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { CarrouselEventosComponent } from './carrousel-eventos/carrousel-eventos.component';
import { MostrarEventoComponent } from './mostrar-evento/mostrar-evento.component';
import { MostrarItemsComponent } from './mostrar-items/mostrar-items.component';
import { MostrarItemComponent } from './mostrar-item/mostrar-item.component';
import { MostrarItemsTextoComponent } from './mostrar-items-texto/mostrar-items-texto.component';
import { AppNameHeaderComponent } from './app-name-header/app-name-header.component';

@NgModule({
  declarations: [
    AppNameHeaderComponent,
    HeaderComponent,
    CarrouselEventosComponent,
    MostrarEventoComponent,
    MostrarItemsComponent,
    MostrarItemComponent,
    MostrarItemsTextoComponent
  ],
  exports:[
    AppNameHeaderComponent,
    HeaderComponent,
    CarrouselEventosComponent,
    MostrarEventoComponent,
    MostrarItemsComponent,
    MostrarItemComponent,
    MostrarItemsTextoComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
