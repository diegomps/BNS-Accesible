import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-mostrar-item',
  templateUrl: './mostrar-item.component.html',
  styleUrls: ['./mostrar-item.component.scss'],
})
export class MostrarItemComponent implements OnInit {
  imagenes: any[] = new Array<any>();
  oculto = 250;
  icono = 'star-outline';
  color = null;

  @Input()
    item: any;
    cat: string;

  constructor(
    private db: AngularFirestore,
    private itemCtrl: ModalController,
    private dataLocal: DataLocalService ) { }

  ngOnInit() {
    this.getImagenes(this.item.id, this.cat);
    this.dataLocal.existeItem( this.item.id )
    .then( existe => (this.icono = (existe) ? 'star' : 'star-outline') && (this.color = (existe) ? 'secondary' : null ));
  }

  regresar(){
    this.itemCtrl.dismiss();
  }

  getImagenes(id: string, categoria: string){
    let path = categoria+'/'+id+'/Imagenes';
    this.imagenes.length = 0;

    this.db.collection(path).get().subscribe((resultado)=>{
      
      resultado.docs.forEach((thing)=>{
        let imagen: any = thing.data();
        imagen.id = thing.id;
        this.imagenes.push(imagen);
      })
    })
  }

  favorito(){
    const existe = this.dataLocal.guardar(this.item, this.cat);
    this.icono = ( existe ) ? 'star' : 'star-outline';
    this.color = ( existe ) ? 'secondary' : null;
  }
}
