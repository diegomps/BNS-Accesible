import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';
import { MostrarEventoPage } from 'src/app/pages/mostrar-evento/mostrar-evento.page';

@Component({
  selector: 'app-carrousel-eventos',
  templateUrl: './carrousel-eventos.component.html',
  styleUrls: ['./carrousel-eventos.component.scss'],
})
export class CarrouselEventosComponent implements OnInit {
  
  eventos: any[] = new Array<any>();

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
}
