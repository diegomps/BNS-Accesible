import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-mostrar-items',
  templateUrl: './mostrar-items.component.html',
  styleUrls: ['./mostrar-items.component.scss'],
})
export class MostrarItemsComponent implements OnInit {
  
  categorias: any[] = new Array<any>();
  categoriaSeleccionada: string = "Alojamientos";

  alojamientos: any[] = new Array<any>();
  atractivos: any[] = new Array<any>();

  

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.getCategorias();
    this.getAlojamientos();
    this.getAtractivos();
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
        if (alojamiento.discapacidadVisual==true){
          alojamiento.dv = "/assets/icon/dv.svg"
        }
          this.alojamientos.push(alojamiento);
      })
    })
   }

   getAtractivos(){
    this.atractivos.length = 0;
    this.db.collection('Atractivos').get().subscribe((resultado)=>{
 
      resultado.docs.forEach((item)=>{
        let atractivo: any = item.data();
        if (atractivo.discapacidadAuditiva==true){
          atractivo.da = "/assets/icon/da.svg"
        }
        if (atractivo.discapacidadFisica==true){
          atractivo.df = "/assets/icon/df.svg"
        }
        if (atractivo.discapacidadVisual==true){
          atractivo.dv = "/assets/icon/dv.svg"
        }
          this.atractivos.push(atractivo);
      })
    })
   }


}
