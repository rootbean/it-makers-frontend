import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.css']
})
export class ExerciseOneComponent implements OnInit {

  title: string = 'Problema 1';
  showText: boolean = false;
  message: string = 'Párrafo de ejemplo para el primer ejercicio de la prueba técnica.';
  messageBtn: string = 'Ver párrafo!';

  constructor() { }

  ngOnInit(): void {
  }

  showTextBtn() {
    this.showText = !this.showText;
    if (this.showText) this.messageBtn = 'Ocultar párrafo!';
    else this.messageBtn = 'Ver párrafo';
    
  }

}
