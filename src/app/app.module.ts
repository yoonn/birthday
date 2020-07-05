import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompleteComponent } from './complete/complete.component';
import { SurveyComponent } from './survey/survey.component';
import { HeaderComponent } from './common/header/header.component';
import { QuestionComponent } from './common/question/question.component';
import {FormsModule} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CompleteComponent,
    SurveyComponent,
    HeaderComponent,
    QuestionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
