import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  items: any[] = new Array<any>();
  constructor( 
    private storage: Storage,
    private toastCtrl: ToastController) { 
      this.storage.create();
    }

    async presentToast(message: string) {
      const toast = await this.toastCtrl.create({
        message,
        duration: 1500,
      });
      toast.present();
    }

  guardar( item: any , cat: string ){
    
    let existe = false;
    let mensaje = '';

    for (const it of this.items){
      if ( it.id == item.id){
        existe = true;
        break;
      }
    }

    if (existe){
      this.items = this.items.filter ( it => it.id !== item.id)
      mensaje = 'Removido de favoritos'
    }else{
      item.categoria = cat;
      this.items.push(item);
      mensaje = 'Agregado a favoritos'
    }

    this.presentToast(mensaje);
    this.storage.set('items', this.items )

    return !existe;
  }

  async cargarFavoritos(){
    const items = await this.storage.get('items');
    this.items = items || [];
    return this.items;
  }

  async existeItem( id: any ){
    await this.cargarFavoritos();
    const existe = this.items.find( it => it.id === id );
    return (existe) ? true : false;
  }

}



