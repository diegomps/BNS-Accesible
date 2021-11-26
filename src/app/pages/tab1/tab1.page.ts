import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';
import { MostrarEventoPage } from '../mostrar-evento/mostrar-evento.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit{

  eventos: any[] = new Array<any>();
  categorias: any[] = new Array<any>();
  alojamientos: any[] = new Array<any>();

  id: string = '';

  slideOptsEvents = {
    slidesPerView: 1,
    autoplay: true,
  };

   slideOptsCategories = {
    slidesPerView: 'auto',
    zoom: false, 
    grabCursor: true
  };

  constructor(
    private db: AngularFirestore,
    private eventoCtrl: ModalController){
  }

  ngOnInit(){
    this.getEventos();
    this.getCategorias();
    this.getAlojamientos();
  }

  getEventos(){
    this.eventos.length = 0;
    this.db.collection('Eventos').get().subscribe((resultado)=>{

      resultado.docs.forEach((item)=>{
        let evento: any = item.data();
        if (evento.estado==true){
          evento.id = item.id;
          this.eventos.push(evento);
        }
      })
    })
  }

  async mostrarEvento(id: string, posicion: number){
    let evento: any = this.eventos;
    if (evento.id = id){
      const modal = await this.eventoCtrl.create({
        component: MostrarEventoPage,
        componentProps: {
          id, posicion, evento
        }
      })
      await modal.present();
    }
  else{
    console.log("error")
  }

  }

  getCategorias(){
    this.categorias.length = 0;
    this.db.collection('Categorias').get().subscribe((resultado)=>{
 
      resultado.docs.forEach((item)=>{
          this.categorias.push(item.data());
      })
    })
   }

   getAlojamientos(){
    this.alojamientos.length = 0;
    this.db.collection('Alojamientos').get().subscribe((resultado)=>{
 
      resultado.docs.forEach((item)=>{
        let alojamiento: any = item.data();
        if (alojamiento.discapacidadAuditiva==true){
          alojamiento.da = "/assets/icon/da.svg"
        }
        if (alojamiento.discapacidadFisica==true){
          alojamiento.df = "/assets/icon/df.svg"
        }
        if (alojamiento.discapacidadAuditiva==true){
          alojamiento.dv = "/assets/icon/dv.svg"
        }
          this.alojamientos.push(alojamiento);
      })
    })
   }

}
