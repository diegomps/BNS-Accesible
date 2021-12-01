import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MostrarItemsComponent } from './mostrar-items/mostrar-items.component';
import { CarrouselEventosComponent } from './carrousel-eventos/carrousel-eventos.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MostrarItemsComponent,
    CarrouselEventosComponent
  ],
  exports:[
    HeaderComponent,
    MostrarItemsComponent,
    CarrouselEventosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
