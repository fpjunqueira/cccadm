import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SocioService } from '../services/socio.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

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
    dataMatricula: ['', Validators.required],
    ehTitular: ['', Validators.required],
    titular: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  onSubmit(): void {
    
  }

}
