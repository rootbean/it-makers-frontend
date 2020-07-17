import { Component, OnInit } from '@angular/core';

import { IItems } from '../../models/items';

@Component({
  selector: 'app-exercise-three',
  templateUrl: './exercise-three.component.html',
  styleUrls: ['./exercise-three.component.css']
})
export class ExerciseThreeComponent implements OnInit {

  title: string = 'Problema 3';
  itemsList: IItems[] = [
    { id: 1, description: 'Ejercicio 1' , done: false},
    { id: 2, description: 'Ejercicio 2' , done: true},
    { id: 3, description: 'Ejercicio 3' , done: false},
    { id: 4, description: 'Ejercicio 4' , done: false},
    { id: 5, description: 'Ejercicio 5' , done: false}
  ];

  itemSelectedDescription: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  newItemSelected ($event){
    this.itemSelectedDescription = $event.description;
    this.findItemById($event.id);

  }

  findItemById(itemId) {
    this.itemsList.map((item) =>{
      if(item.id == itemId){
        item.done = true;
      }
      
      return item;
    });
  }

}
