import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { SociosComponent } from './adm/socios/socios/socios.component';
import { MaterialModule } from './material.module';
import { SocioComponent } from './adm/socios/socio/socio.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PatrimonioComponent } from './adm/patrimonio/patrimonio.component';
import { EventosComponent } from './adm/eventos/eventos.component';
import { FinanceiroComponent } from './adm/financeiro/financeiro.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    SociosComponent,
    SocioComponent,
    HeaderComponent,
    HomeComponent,
    PatrimonioComponent,
    EventosComponent,
    FinanceiroComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AuthModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
