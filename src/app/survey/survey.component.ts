import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  public guest: string;
  public host: string;

  public q1: string;
  public q2: string;
  public q3: string;

  public url: string;

  constructor(private route: ActivatedRoute, private cookieService: CookieService, private router: Router) {

    this.guest = this.cookieService.get('bdGuest');
    if (this.guest === undefined) {
      this.router.navigate(['select']);
    }

    this.setHost();
    this.url = 'complete';

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
    if (this.isEmptyString(this.q1)) {
      alert('케익을 골라주');
      return false;
    } else if (this.isEmptyString(this.q2)) {
      alert('선물을 골라주');
      return false;
    } else if (this.isEmptyString(this.q3)) {
      alert('요일을 골라주');
      return false;
    }
    return true;
  }

  public saveInfo() {
    if (!this.valid()) {
      return false;
    }

    const bdData = this.q1.concat(this.q2).concat(this.q3);

    this.cookieService.set('bdData', bdData);
    this.router.navigate([this.url]);
  }

  /*
  문자열이 빈 문자열인지 검사
  비어있다면 true 반환, 안비어있으면 false 반환
   */
  public isEmptyString(str) {
    return str === 'undefined' || str === undefined || str === '' || str == null || str === 'null';
  }

}
