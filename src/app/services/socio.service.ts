import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Socio } from '../models/socio';

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  private sociosCollection: AngularFirestoreCollection<Socio> = this.afs.collection('socios');

  constructor(private afs: AngularFirestore) { }

  getSocios(): Observable<Socio[]> {
    return this.sociosCollection.valueChanges();
  }

  addSocio(socio: Socio) {
    return this.sociosCollection.add(socio);
  }
}
