import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MostrarItemComponent } from 'src/app/components/mostrar-item/mostrar-item.component';
import { DataLocalService } from '../../services/data-local.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  favoritos: any [] = [];
  categorias: any [] = [];
  result: any;
  constructor( 
    private db: AngularFirestore,
    private dataLocal: DataLocalService,
    private modalCtrl: ModalController) {}

  async ngOnInit(){
    this.favoritos = await this.dataLocal.cargarFavoritos();
    this.obtenerCat();
  }

  async mostrarItem(item: any [], cat: string){
    const modal = await this.modalCtrl.create({
      component: MostrarItemComponent,
      componentProps:{
        item, cat
      }
    });
   modal.present();
 }

 obtenerCat(){

  for (let i = 0; i < this.favoritos.length; i++) {
    this.categorias[i] = this.favoritos[i].categoria;  
  }

  const dataArr = new Set(this.categorias);
  this.result = [...dataArr];
  this.categorias.length = 0;
 }
}
