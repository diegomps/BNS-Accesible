import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mostrar-evento',
  templateUrl: './mostrar-evento.page.html',
  styleUrls: ['./mostrar-evento.page.scss'],
})
export class MostrarEventoPage implements OnInit {

  @Input() id: string; posicion: number; evento: any[];
  da: string;
  df: string;
  dv: string;

  
  constructor( private eventoCtrl: ModalController ) { }

  ngOnInit() {
    this.mostrarIconos();
    }

  mostrarIconos(){
    if (this.evento[this.posicion].discapacidadAuditiva == true)
    {
      this.da = "/assets/icon/da.svg"
    }
    if (this.evento[this.posicion].discapacidadFisica == true)
    {
      this.df = "/assets/icon/df.svg"
    }
    if (this.evento[this.posicion].discapacidadVisual == true)
    {
      this.dv = "/assets/icon/dv.svg"
    }
  }

  cerrarEvento(){
    this.eventoCtrl.dismiss();
  }


}
