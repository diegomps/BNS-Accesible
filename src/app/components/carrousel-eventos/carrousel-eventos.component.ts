import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';
import { MostrarEventoComponent } from '../mostrar-evento/mostrar-evento.component';

@Component({
  selector: 'app-carrousel-eventos',
  templateUrl: './carrousel-eventos.component.html',
  styleUrls: ['./carrousel-eventos.component.scss'],
})
export class CarrouselEventosComponent implements OnInit {
  
  eventos: any[] = new Array<any>();

  slideOptsEvents = {
    slidesPerView: 1,
    autoplay: true,
  };
  
  constructor(private db: AngularFirestore,
              private eventoCtrl: ModalController) { }

  ngOnInit() {
    this.getEventos();
  }

  getEventos(){
    this.eventos.length = 0;
    this.db.collection('Eventos').get().subscribe((resultado)=>{

      resultado.docs.forEach((item)=>{
        let evento: any = item.data();
        if (evento.estado == true){
          this.eventos.push(evento);
        }
      })
    })
  }

  async mostrarEvento(evento: any []){
    const modal = await this.eventoCtrl.create({
      component: MostrarEventoComponent,
      componentProps:{
        evento
      }
    });
   modal.present();
 }

}
