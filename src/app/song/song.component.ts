import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  public audioUrl = 'assets/mp3/hbd_song.mp3';
  public audioTitle = 'Happy Birtday Song';

  constructor() { }

  ngOnInit(): void {
  }

}
