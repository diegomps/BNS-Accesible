import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipo-de-usuario',
  templateUrl: './tipo-de-usuario.page.html',
  styleUrls: ['./tipo-de-usuario.page.scss'],
})
export class TipoDeUsuarioPage implements OnInit {

  id: string;
  name: string = "";

  constructor(
    private ar: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.ar.snapshot.paramMap.get("id");
    if (this.id == "dAuditiva") {
      this.name = "Discapacidad Auditiva"
    }
    if (this.id == "dFisica") {
      this.name = "Discapacidad Física"
    }
    if (this.id == "dVisual") {
      this.name = "Discapacidad Visual"
    }
  }

}
