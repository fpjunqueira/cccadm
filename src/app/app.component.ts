import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './auth/user';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user$: Observable<User>;
  authenticated$: Observable<boolean>;

  constructor(private service: AuthService,
              private router: Router) {
    this.user$ = this.service.getUser();
    this.authenticated$ = this.service.authenticated();
  }

  logout() {
    this.service.logout();
    this.router.navigateByUrl('/auth/login');
  }

}
