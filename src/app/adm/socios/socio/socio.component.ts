import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SocioService } from 'src/app/services/socio.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Socio } from 'src/app/models/socio';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {

  @ViewChild('nome') nomeSocio: ElementRef;

  socio$: Observable<Socio>;
  novo = false;

  constructor(
    private fb: FormBuilder,
    private socioService: SocioService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
  ) {  }

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
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'new') {
      this.socio$ = this.socioService.getSocioById(id) as Observable<Socio>;
      this.socio$
        .subscribe(
          socio => {
            return this.socioForm.setValue(socio);
          },
          error => {
            return console.log('Não foi possível buscar sócio', error);
          });
    } else {
      this.novo = true;
    }
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
        // this.socioForm.reset({id: undefined, nome: '', dataNascimento: '', matricula: '', documento: '',});
        // this.nomeSocio.nativeElement.focus();
        this.router.navigate(['/socios']);
      })
      .catch(e => {
        this.snackBar.open('Erro ao adicionar sócio', 'OK', {duration: 7000});
      });
  }

  updateSocio(socio: Socio) {
    this.socioService.updateSocio(socio)
      .then(() => {
        this.snackBar.open('Sócio atualizado com sucesso.', 'OK', {duration: 7000});
        this.router.navigate(['/socios']);
      })
      .catch(e => {
        this.snackBar.open('Erro ao atualizar sócio', 'OK', {duration: 7000});
      });
  }
}
