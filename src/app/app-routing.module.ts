import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EventosComponent } from './adm/eventos/eventos.component';
import { FinanceiroComponent } from './adm/financeiro/financeiro.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PatrimonioComponent } from './adm/patrimonio/patrimonio.component';
import { SociosComponent } from './adm/socios/socios/socios.component';
import { HomeComponent } from './home/home.component';
import { SocioComponent } from './adm/socios/socio/socio.component';
import { AuthGuardService } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: 'eventos', component: EventosComponent, canActivate: [AuthGuardService]},
  { path: 'financeiro', component: FinanceiroComponent, canActivate: [AuthGuardService]},
  { path: 'patrimonio', component: PatrimonioComponent, canActivate: [AuthGuardService]},
  { path: 'socios', component: SociosComponent, canActivate: [AuthGuardService]},
  { path: 'socios/:id', component: SocioComponent, canActivate: [AuthGuardService]},
  { path: 'socios/new', component: SocioComponent, canActivate: [AuthGuardService]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  { path: '', pathMatch: 'full', redirectTo: '/auth/login'},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
