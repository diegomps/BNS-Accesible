import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mostrar-evento',
  templateUrl: './mostrar-evento.component.html',
  styleUrls: ['./mostrar-evento.component.scss'],
})
export class MostrarEventoComponent{
  @Input() evento: any;
  da: string = "/assets/icon/da.svg";
  df: string = "/assets/icon/df.svg";
  dv: string = "/assets/icon/dv.svg";

  
  constructor( private eventoCtrl: ModalController ) { }

  cerrarEvento(){
    this.eventoCtrl.dismiss();
  }
  
}
