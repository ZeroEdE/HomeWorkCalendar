import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalendarComponent} from './calendar/calendar.component';

const routes: Routes = [
  {path: '', component: CalendarComponent},
  {path: '', redirectTo: '/calendar', pathMatch: 'full'},
  {path: 'calendar', component: CalendarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
