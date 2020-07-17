import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.css']
})
export class ExerciseTwoComponent implements OnInit {

  title: string = 'Problema 2';
  refTestInput: string = 'sin dato';
  focusedBoolean: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
