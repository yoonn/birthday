import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import { CompleteComponent } from './complete/complete.component';
import { SelectComponent } from './select/select.component';
import { CamComponent } from './cam/cam.component';
import { SongComponent } from './song/song.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'select', pathMatch: 'full' },
  { path: 'select', component: SelectComponent},
  { path: 'survey', component: SurveyComponent},
  { path: 'complete', component: CompleteComponent},
  { path: 'cam', component: CamComponent},
  { path: 'song', component: SongComponent},
  { path: 'admin', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
