import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public paramName = 'guest';

  public guest: string;
  public gifSrc: string;

  constructor(private route: ActivatedRoute) {

    this.guest = route.snapshot.params[this.paramName];
    this.setSrc();

    console.log('guest', this.guest, 'src', this.gifSrc);
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

}
