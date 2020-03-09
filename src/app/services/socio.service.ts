import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Socio } from '../models/socio';

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  private sociosCollection: AngularFirestoreCollection<Socio> = this.asf.collection('socios');
  constructor(private asf: AngularFirestore) { }

  getSocios(): Observable<Socio[]> {
    return this.sociosCollection.valueChanges();
  }

  addSocio(socio: Socio) {
    this.sociosCollection.add(socio);
  }
}
