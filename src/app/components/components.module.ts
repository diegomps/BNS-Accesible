import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MostrarItemsComponent } from './mostrar-items/mostrar-items.component';
import { CarrouselEventosComponent } from './carrousel-eventos/carrousel-eventos.component';
import { MostrarItemComponent } from './mostrar-item/mostrar-item.component';
import { MostrarEventoComponent } from './mostrar-evento/mostrar-evento.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MostrarItemsComponent,
    CarrouselEventosComponent,
    MostrarItemComponent,
    MostrarEventoComponent
  ],
  exports:[
    HeaderComponent,
    MostrarItemsComponent,
    CarrouselEventosComponent,
    MostrarItemComponent,
    MostrarEventoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
