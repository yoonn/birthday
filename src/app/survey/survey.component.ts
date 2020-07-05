import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  public paramName = 'guest';

  public guest: string;
  public host: string;

  public q1: string;
  public q2: string;
  public q3: string;

  public url: string;

  constructor(private route: ActivatedRoute, private cookieService: CookieService, private router: Router) {

    this.guest = route.snapshot.params[this.paramName];
    this.setHost();
    this.url = 'complete/' + this.guest;

    console.log('getCookie', this.cookieService.get('bdData'));
    if (this.cookieService.get('bdData') !== ''){
      this.router.navigate([this.url]);
    }

  }

  ngOnInit(): void {
  }

  public setHost(){
    if (this.guest === 'ari') {
      this.host = '찡이';
    } else if (this.guest === 'jin') {
      this.host = '융디니';
    } else {
      this.host = 'wrong';
    }
  }

  public valid() {
    if (this.q1 === 'undefined' || this.q1 === '' || this.q1 == null || this.q1 === 'null') {
      alert('케익을 골라주');
      return false;
    } else if (this.q2 === 'undefined' || this.q2 === '' || this.q2 == null || this.q2 === 'null') {
      alert('선물을 골라주');
      return false;
    } else if (this.q3 === 'undefined' || this.q3 === '' || this.q3 == null || this.q3 === 'null') {
      alert('요일을 골라주');
      return false;
    }
    return true;
  }

  public saveInfo() {
    if (!this.valid()) {
      return false;
    }

    // const bdData = {
    //   q1: this.q1,
    //   q2: this.q2,
    //   q3: this.q3
    // };

    const bdData = this.q1.concat(this.q2).concat(this.q3);

    // console.log('bdData', bdData);
    this.cookieService.set('bdData', bdData);
    this.router.navigate([this.url]);
  }

}
