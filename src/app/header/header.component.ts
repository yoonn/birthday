import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public guest: string;
  public gifSrc: string;

  constructor(private cookieService: CookieService, private router: Router) {

    this.guest = this.cookieService.get('bdGuest');
    if (this.guest === undefined) {
      this.router.navigate(['select']);
    }

    this.setSrc();

  }

  ngOnInit(): void {
  }

  public setSrc() {
    if (this.guest === 'ari') {
      this.gifSrc = 'assets/img/header/face.gif';
    } else if (this.guest === 'jin') {
      this.gifSrc = 'assets/img/header/face.gif';
    } else {
      console.log('guest', this.guest);
    }
  }

  public goQuestion(){
    this.router.navigate(['survey']);
  }

  public goCamera(){
    this.router.navigate(['cam']);
  }

  public goSong(){
    this.router.navigate(['song']);
  }

}
