import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SocioService } from '../services/socio.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Socio } from '../models/socio';
import { Observable } from 'rxjs';

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

  socioForm = this.fb.group({
    id: [undefined],
    nome: ['', Validators.required],
    dataNascimento: ['', Validators.required],
    matricula: ['', Validators.required],
    documento: ['', Validators.required],
    // dataMatricula: ['', Validators.required],
    // ehTitular: ['', Validators.required],
    // titular: ['', Validators.required],
  });

  ngOnInit(): void {
    this.socios$ = this.socioService.getSocios();
  }

  onSubmit(): void {
    const socio: Socio = this.socioForm.value;
    if (!socio.id) {
      this.addSocio(socio);
    } else {
      this.updateSocio(socio);
    }
  }

  addSocio(socio: Socio) {
    this.socioService.addSocio(socio)
      .then(() => {
        this.snackBar.open('Sócio adicionado com sucesso.', 'OK', {duration: 2000});
      })
      .catch(e => {
        this.snackBar.open('Não foi possível adicionar sócio', 'OK', {duration: 2000});

      });
  }

  updateSocio(socio: Socio) {

  }

}
