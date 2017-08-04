import { WorkoutInputComponent } from './workout-input.component';
import { WorkoutStatsComponent } from './workout-stats.component';
import { DashBoardComponent } from './dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    WorkoutStatsComponent,
    WorkoutInputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashBoardComponent
      },
      {
        path: 'workout-stats',
        component: WorkoutStatsComponent
      },
      {
        path: 'workout-input',
        component: WorkoutInputComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
