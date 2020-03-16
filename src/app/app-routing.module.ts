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

const appRoutes: Routes = [
  { path: 'eventos', component: EventosComponent},
  { path: 'financeiro', component: FinanceiroComponent},
  { path: 'patrimonio', component: PatrimonioComponent},
  { path: 'socios', component: SociosComponent},
  { path: 'socios/:id', component: SocioComponent},
  { path: 'socios/new', component: SocioComponent},
  { path: 'home', component: HomeComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'},
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
