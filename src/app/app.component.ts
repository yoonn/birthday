import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'birthday';

  public paramName = 'guest';
  public guest: string;

  constructor(private route: ActivatedRoute) {
    this.guest = route.snapshot.params[this.paramName];
  }

}
