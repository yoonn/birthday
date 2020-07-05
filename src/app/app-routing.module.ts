import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import { CompleteComponent } from './complete/complete.component';

const routes: Routes = [
  { path: '', redirectTo: 'survey.html', pathMatch: 'full' },
  { path: 'survey/:guest', component: SurveyComponent},
  { path: 'complete/:guest', component: CompleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
