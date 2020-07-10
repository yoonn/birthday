import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {ActivatedRoute, Router} from '@angular/router';

declare const Kakao: any; // kakao.js에서 사용

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit {

  private KAKAO_JAVASCRIPT_API_KEY = 'e6497dec73871c668e6be70741bed752';

  public guest: string;
  public host: string;

  public bdData;

  public q1: string;
  public q2: string;
  public q3: string;
  public q1String: string;
  public q2String: string;
  public q3String: string;

  public url: string;

  constructor(private route: ActivatedRoute, private cookieService: CookieService, private router: Router) {

    this.guest = this.cookieService.get('bdGuest');
    if (this.guest === undefined) {
      this.router.navigate(['select']);
    }
    this.url = 'survey';

    this.getBdData();
    this.setBdData(this.bdData);
    this.setBdDataString();
    this.setHost();
  }

  ngOnInit(): void {
    Kakao.init(this.KAKAO_JAVASCRIPT_API_KEY);
  }

  public setBdData(bdData) {
    this.q1 = bdData[0];
    this.q2 = bdData[1];
    this.q3 = bdData[2];
  }

  public setBdDataString(){
    if (this.q1 === '1') {
      this.q1String = '돈 들어간 초코케익';
    } else if (this.q1 === '2') {
      this.q1String = '핸드메이드 랜덤케익';
    } else if (this.q1 === '3') {
      this.q1String = '돈 들어간 생크림케익';
    }
    if (this.q2 === '1') {
      this.q2String = '현금';
    } else if (this.q2 === '2') {
      this.q2String = '랜덤선물';
    } else if (this.q2 === '3') {
      this.q2String = '마음만';
    }
    if (this.q3 === '1') {
      this.q3String = '금';
    } else if (this.q3 === '2') {
      this.q3String = '토';
    } else if (this.q3 === '3') {
      this.q3String = '일';
    }
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

  public sendCompleteKakao() {
    let message = '';
    if (this.guest === 'ari') {
      message = '곧 계란한판 되는 영자 🐣\n\n' +
        '🎂 ' + this.q3String + '요일에\n' +
        '🎁 ' + this.q1String + '와\n' +
        '🎉 ' + this.q2String + ' 갖고\n\n' +
        '만나욥🕺';
    } else if (this.guest === 'jin') {
      message = '김삼십+2살 김지냔 🐷\n\n' +
        '🎂 ' + this.q3String + '요일에\n' +
        '🎁 ' + this.q1String + '와\n' +
        '🎉 ' + this.q2String + ' 갖고\n\n' +
        '만나욥🕺';
    }

    Kakao.Link.sendDefault({
      objectType: 'text',
      text: message,
      link: {
        mobileWebUrl: 'https://yoonn.github.io/birthday/',
        webUrl: 'https://yoonn.github.io/birthday/',
      },
    });
  }

}
