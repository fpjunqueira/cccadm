import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    address: ['', []],
    city: ['', []],
    state: ['', []],
    phone: ['', []],
    email: ['', [Validators.required, Validators.email]],
    password1: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
  },
  {
    validator: this.matchingPasswords
  });

  states: ['MG', 'SP', 'RJ', 'Outro'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  matchingPasswords(group: FormGroup) {
    if (group) {
      // tslint:disable-next-line: no-string-literal
      const password1 = group.controls['password1'].value;
      // tslint:disable-next-line: no-string-literal
      const password2 = group.controls['password2'].value;
      if (password1 === password2) {
        return null;
      }
      return { matching: false };
    }
  }

  onSubmit() {
    const newUser: User = {
      firstName: this.formRegister.value.firstname,
      lastName: this.formRegister.value.lastname,
      address: this.formRegister.value.address,
      city: this.formRegister.value.city,
      state: this.formRegister.value.state,
      phone: this.formRegister.value.phone,
      email: this.formRegister.value.email,
      password1: this.formRegister.value.password1,
      password2: this.formRegister.value.password2,
    };
    // register
  }
}
