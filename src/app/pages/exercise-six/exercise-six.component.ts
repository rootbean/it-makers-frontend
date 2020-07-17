import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-six',
  templateUrl: './exercise-six.component.html',
  styleUrls: ['./exercise-six.component.css']
})
export class ExerciseSixComponent implements OnInit {

  title: string = 'Problema 6';
  messageError: boolean = false;
  valueX: number = 1;
  acumulation: any [] = [];

  constructor() { }

  ngOnInit(): void {
    this.createX();
  }

  changeXBtn () {
    this.createX();
  }

  createX () {
    
    if (this.valueX > 0) {
      let start = 1;
      let end = this.valueX;
      for(let itemAcumulation = 1; itemAcumulation <= this.valueX; itemAcumulation++) {
        let newText = [];
        for (let i = 1; i <= this.valueX; i++) {
          if(start === i) newText[i] = 'X';
          else if (end === i) newText[i] = 'X';
          else newText[i] = '_'; 
          
        }
  
        start++;
        end--;
        this.acumulation[itemAcumulation] = newText;
        this.messageError = false;
      }
    } else {
      this.messageError = true;
    }

  }

}
