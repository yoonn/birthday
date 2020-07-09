import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit {

  public guest: string;
  public host: string;

  public bdData;

  public q1: string;
  public q2: string;
  public q3: string;

  public url: string;

  constructor(private route: ActivatedRoute, private cookieService: CookieService, private router: Router) {

    this.guest = this.cookieService.get('bdGuest');
    if (this.guest === undefined) {
      this.router.navigate(['select']);
    }
    this.url = 'survey';

    this.getBdData();
    this.setBdData(this.bdData);
    this.setHost();
  }

  ngOnInit(): void {
  }

  public setBdData(bdData) {
    this.q1 = bdData[0];
    this.q2 = bdData[1];
    this.q3 = bdData[2];
  }

  public setHost(){
    if (this.guest === 'ari') {
      this.host = '찡이';
    } else if (this.guest === 'jin') {
      this.host = '융디니';
    } else {
      this.router.navigate(['select']);
    }
  }

  public removeCookie() {
    this.cookieService.delete('bdData');
    this.router.navigate([this.url]);
  }

  public getBdData(){
    this.bdData = this.cookieService.get('bdData');
    if (this.bdData === '' ) {
      this.router.navigate([this.url]);
    }
  }

}
