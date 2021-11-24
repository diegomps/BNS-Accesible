import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit{

  tiposdeusuarios: any[] = new Array<any>();

  constructor(private db: AngularFirestore) {}

  ngOnInit(){
    this.getTiposDeUsuarios();
    console.log(this.tiposdeusuarios)
  }

  getTiposDeUsuarios(){
    this.tiposdeusuarios.length = 0;
    this.db.collection('TiposDeUsuarios').get().subscribe((resultado)=>{
 
      resultado.docs.forEach((item)=>{
          this.tiposdeusuarios.push(item.data());
      })
    })
   }

}

