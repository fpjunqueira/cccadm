import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Socio } from 'src/app/models/socio';
import { SocioService } from 'src/app/services/socio.service';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

  socios$: Observable<Socio[]>;

  displayedColumns = [
    'nome',
    'matricula',
    'dataNascimento',
    'documento',
    'operations',
  ];

  constructor(
    private fb: FormBuilder,
    private socioService: SocioService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.socios$ = this.socioService.getSocios();
  }

  addSocio() {
    // this.socioService.addSocio(socio)
    //   .then(() => {
    //     this.snackBar.open('Sócio adicionado com sucesso.', 'OK', {duration: 7000});
    //   })
    //   .catch(e => {
    //     this.snackBar.open('Não foi possível adicionar sócio', 'OK', {duration: 7000});

    //   });

    // Vair para tela de inclusão de sócios
  }
}
