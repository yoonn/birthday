import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

declare const Kakao: any; // kakao.js에서 사용

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'birthday';

  private KAKAO_JAVASCRIPT_API_KEY = 'e6497dec73871c668e6be70741bed752';

  public paramName = 'guest';
  public guest: string;

  constructor(private route: ActivatedRoute) {
    this.guest = route.snapshot.params[this.paramName];
    Kakao.init(this.KAKAO_JAVASCRIPT_API_KEY);
  }

}
