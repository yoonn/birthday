import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  public guestName: string;
  public guest: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.guest = this.cookieService.get('bdGuest');
    if (this.guest === 'ari') {
      this.guestName = '변아영';
    } else if (this.guest === 'jin') {
      this.guestName = '김진현';
    } else {
      this.guestName = '';
    }
  }

  ngOnInit(): void {
  }

  public setGuest() {
    if (this.guestName === '변아영') {
      this.cookieService.set('bdGuest', 'ari');
      this.router.navigate(['survey']);
    } else if (this.guestName === '김진현') {
      this.cookieService.set('bdGuest', 'jin');
      this.router.navigate(['survey']);
    } else {
      alert('😛 외부인 금지 👎');
    }
  }


}
