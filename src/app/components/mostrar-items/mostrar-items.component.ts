import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ModalController } from '@ionic/angular';
import { MostrarItemComponent } from '../mostrar-item/mostrar-item.component';

@Component({
  selector: 'app-mostrar-items',
  templateUrl: './mostrar-items.component.html',
  styleUrls: ['./mostrar-items.component.scss'],
})
export class MostrarItemsComponent implements OnInit {
  

  categoriaSeleccionada: string = "Alojamientos";

  da: string = "/assets/icon/da.svg";
  df: string = "/assets/icon/df.svg";
  dv: string = "/assets/icon/dv.svg";

  categorias:   any[] = new Array<any>();
  tipoCategoria: any[] = new Array<any>();

  constructor(private db: AngularFirestore,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.getCategorias();
    this.consultaDB(this.categoriaSeleccionada);
  }

  getCategorias(){
    this.categorias.length = 0;

    this.db.collection('Categorias').get().subscribe((resultado)=>{
      resultado.docs.forEach((item)=>{
          this.categorias.push(item.data());
      })
    })
    
   }

  segmentChanged(event: CustomEvent){
    this.categoriaSeleccionada = event.detail.value
    this.consultaDB(this.categoriaSeleccionada);
   }

   consultaDB(path: string){
    this.tipoCategoria.length = 0;

    this.db.collection(path).get().subscribe((resultado)=>{
      resultado.docs.forEach((item)=>{
        let tipCat: any = item.data();
        tipCat.id = item.id;
        this.tipoCategoria.push(tipCat);
      })
    })

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
  
}
