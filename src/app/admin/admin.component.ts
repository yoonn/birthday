import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

declare const Kakao: any; // kakao.js에서 사용

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private KAKAO_JAVASCRIPT_API_KEY = 'e6497dec73871c668e6be70741bed752';
  public description: string;

  constructor(private cookieService: CookieService) {
    this.description = '🥳';
  }

  ngOnInit(): void {
    Kakao.init(this.KAKAO_JAVASCRIPT_API_KEY);
  }

  public removeGuest() {
    this.cookieService.delete('bdGuest');
  }

  public removeBdData() {
    this.cookieService.delete('bdData');
  }

  public sendInviteKakao() {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '🌟HBD🌟',
        description: this.description,
        imageUrl:
          'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          mobileWebUrl: 'https://yoonn.github.io/birthday/',
          webUrl: 'https://yoonn.github.io/birthday/',
        },
      },
      buttons: [
        {
          title: 'ㄱㄱ 😊',
          link: {
            mobileWebUrl: 'https://yoonn.github.io/birthday/',
            webUrl: 'https://yoonn.github.io/birthday/',
          },
        }
      ]
    });
  }

}
