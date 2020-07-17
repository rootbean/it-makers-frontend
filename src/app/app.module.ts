import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { FooterComponent } from './@components/footer/footer.component';
import { HeaderComponent } from './@components/header/header.component';
import { MainComponent } from './@components/main/main.component';
import { ExerciseOneComponent } from './pages/exercise-one/exercise-one.component';
import { ExerciseTwoComponent } from './pages/exercise-two/exercise-two.component';
import { ExerciseThreeComponent } from './pages/exercise-three/exercise-three.component';
import { ExerciseFourComponent } from './pages/exercise-four/exercise-four.component';
import { ExerciseFiveComponent } from './pages/exercise-five/exercise-five.component';
import { ExerciseSixComponent } from './pages/exercise-six/exercise-six.component';
import { InfoTestComponent } from './pages/info-test/info-test.component';
import { TestInputComponent } from './@components/test-input/test-input.component';
import { FocusableInputComponent } from './@components/focusable-input/focusable-input.component';
import { TodoListComponent } from './@components/todo-list/todo-list.component';

import { miReducer } from './app.reducer';
import { GreeterComponent } from './@components/greeter/greeter.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ExerciseOneComponent,
    ExerciseTwoComponent,
    ExerciseThreeComponent,
    ExerciseFourComponent,
    ExerciseFiveComponent,
    ExerciseSixComponent,
    InfoTestComponent,
    TestInputComponent,
    FocusableInputComponent,
    TodoListComponent,
    GreeterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      user: miReducer
    }),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
