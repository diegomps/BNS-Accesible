import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class dbService {

  items: Observable<any[]>;
  
  constructor(
    public db: AngularFireDatabase,

  ) { }

}
