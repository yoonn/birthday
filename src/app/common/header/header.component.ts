import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public paramName = 'guest';

  public guest: string;
  public gifSrc: string;

  constructor(private route: ActivatedRoute, private router: Router) {

    this.guest = route.snapshot.params[this.paramName];
    this.setSrc();

    const param = route.snapshot.params[this.paramName];
    if (param === undefined || param === '') {
      this.guest = 'none';
    } else {
      this.guest = param;
    }

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
    const url = 'survey/' + this.guest;
    this.router.navigate([url]);
  }

  public goCamera(){
    this.router.navigate([]);
  }

  public goSong(){
    this.router.navigate([]);
  }

}
