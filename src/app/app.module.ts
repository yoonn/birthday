import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';
import { WebcamModule } from 'ngx-webcam';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

import { AppComponent } from './app.component';
import { CompleteComponent } from './complete/complete.component';
import { SurveyComponent } from './survey/survey.component';
import { HeaderComponent } from './header/header.component';
import { SelectComponent } from './select/select.component';
import { CamComponent } from './cam/cam.component';
import { SongComponent } from './song/song.component';


@NgModule({
  declarations: [
    AppComponent,
    CompleteComponent,
    SurveyComponent,
    HeaderComponent,
    SelectComponent,
    CamComponent,
    SongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WebcamModule,
    NgxAudioPlayerModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
