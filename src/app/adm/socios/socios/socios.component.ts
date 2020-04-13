import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    private socioService: SocioService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.socios$ = this.socioService.getSocios();
  }

  removeSocio(socio: Socio) {
    this.socioService.removeSocio(socio)
      .then(() => {
        this.snackBar.open('Sócio excluído com sucesso.', 'OK', {duration: 7000});
      })
      .catch(error => {
        console.log('Erro ao excluir sócio', error);
        this.snackBar.open('Sócio excluído com sucesso.', 'OK', {duration: 7000});
      });
  }
}
