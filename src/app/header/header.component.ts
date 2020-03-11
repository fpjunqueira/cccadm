import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  btnHomeColor = '';
  btnSociosColor = '';
  btnEventosColor = '';
  btnPatrimonioColor = '';
  btnFinanceiroColor = '';

  constructor() { }

  ngOnInit(): void {
    this.btnHomeColor = 'accent';
  }

  btnHomeColorClick() {
    this.btnHomeColor = 'accent';
    this.btnSociosColor = '';
    this.btnEventosColor = '';
    this.btnPatrimonioColor = '';
    this.btnFinanceiroColor = '';
  }

  btnSociosColorClick() {
    this.btnHomeColor = '';
    this.btnSociosColor = 'accent';
    this.btnEventosColor = '';
    this.btnPatrimonioColor = '';
    this.btnFinanceiroColor = '';
  }

  btnEventosColorClick() {
    this.btnHomeColor = '';
    this.btnSociosColor = '';
    this.btnEventosColor = 'accent';
    this.btnPatrimonioColor = '';
    this.btnFinanceiroColor = '';
  }

  btnPatrimonioColorClick() {
    this.btnHomeColor = '';
    this.btnSociosColor = '';
    this.btnEventosColor = '';
    this.btnPatrimonioColor = 'accent';
    this.btnFinanceiroColor = '';
  }

  btnFinanceiroColorClick() {
    this.btnHomeColor = '';
    this.btnSociosColor = '';
    this.btnEventosColor = '';
    this.btnPatrimonioColor = '';
    this.btnFinanceiroColor = 'accent';
  }

}
