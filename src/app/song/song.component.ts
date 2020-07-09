import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  public guest: string;

  public audioUrl = 'assets/mp3/hbd_song.mp3';
  public audioTitle = 'Happy Birtday Song';

  constructor(private cookieService: CookieService, private router: Router) {
    this.guest = this.cookieService.get('bdGuest');
    if (this.guest === undefined) {
      this.router.navigate(['select']);
    }
  }

  ngOnInit(): void {
  }

}
