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
        this.snackBar.open('Sócio adicionado com sucesso.', 'OK', {duration: 7000});
      })
      .catch(e => {
        this.snackBar.open('Não foi possível adicionar sócio', 'OK', {duration: 7000});

      });
  }

  updateSocio(socio: Socio) {

  }

}
