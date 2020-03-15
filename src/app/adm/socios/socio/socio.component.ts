import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SocioService } from 'src/app/services/socio.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Socio } from 'src/app/models/socio';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {

  @ViewChild('nome') nomeSocio: ElementRef;

  socios$: Observable<Socio[]>;

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
        this.socioForm.reset({id: undefined, nome: '', dataNascimento: '', matricula: '', documento: '',})
        this.nomeSocio.nativeElement.focus();
      })
      .catch(e => {
        this.snackBar.open('Não foi possível adicionar sócio', 'OK', {duration: 7000});
      });
  }

  updateSocio(socio: Socio) {

  }

}
