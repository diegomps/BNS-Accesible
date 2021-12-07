import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit{


  usuarios: any[] = new Array<any>();

  constructor(
    private db: AngularFirestore,
    private router: Router) {}

  ngOnInit(){  
    this.getTiposDeUsuarios();
  }

  getTiposDeUsuarios(){
    this.usuarios.length = 0;

    this.db.collection('TiposDeUsuarios').get().subscribe((resultado)=>{
      resultado.docs.forEach((item)=>{
        let usuario: any = item.data();
        usuario.id = item.id;
        this.usuarios.push(usuario);
      })
    })
  
   }

   gotoTDU(idUser: string){
    this.router.navigate(['/tipo-de-usuario',idUser])
  }
   
}