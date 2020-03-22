import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { User } from './user';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable, throwError, of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userCollection: AngularFirestoreCollection<User> = this.afs.collection('users');

  constructor(private afs: AngularFirestore,
              private afAuth: AngularFireAuth) { }

  register(user: User): Observable<boolean> {
    return from(this.afAuth.auth
      .createUserWithEmailAndPassword(user.email, user.password))
      .pipe(
        switchMap((u: firebase.auth.UserCredential) =>
          this.userCollection.doc(u.user.uid)
            .set({...user, id: u.user.uid})
            .then(() => true)
        ),
        catchError(err => throwError(err))
      );
  }

  login(email: string, password: string) {
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, password))
      .pipe(
        switchMap((u: firebase.auth.UserCredential) => this.userCollection.doc<User>(u.user.uid).valueChanges()),
        catchError(err => throwError('Invalid credentials or user is not registered. '))
      );
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getUser() {
    return this.afAuth.authState
      .pipe(
        switchMap(user => user ?
          this.userCollection.doc<User>(user.uid).valueChanges() : of(null))
      );
  }

  authenticated() {
    return this.afAuth.authState
      .pipe(map(user => user ? true : false));
  }

}
