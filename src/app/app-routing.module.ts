import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './@components/main/main.component';
import { ExerciseOneComponent } from './pages/exercise-one/exercise-one.component';
import { ExerciseTwoComponent } from './pages/exercise-two/exercise-two.component';
import { ExerciseThreeComponent } from './pages/exercise-three/exercise-three.component';
import { ExerciseFourComponent } from './pages/exercise-four/exercise-four.component';
import { ExerciseFiveComponent } from './pages/exercise-five/exercise-five.component';
import { ExerciseSixComponent } from './pages/exercise-six/exercise-six.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'exercise-one',
    component: ExerciseOneComponent
  },
  {
    path: 'exercise-two',
    component: ExerciseTwoComponent
  },
  {
    path: 'exercise-three',
    component: ExerciseThreeComponent
  },
  {
    path: 'exercise-four',
    component: ExerciseFourComponent
  },
  {
    path: 'exercise-five',
    component: ExerciseFiveComponent
  },
  {
    path: 'exercise-six',
    component: ExerciseSixComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
