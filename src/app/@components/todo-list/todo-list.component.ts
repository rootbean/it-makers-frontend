import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IItems } from '../../models/items';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() items: IItems[] = [];
  @Output() onItemClick = new EventEmitter<IItems>();
  
  constructor() { }

  ngOnInit(): void {
  }

  verifyDone(item) {
    if(!item.done) {
      this.onItemClick.emit(item);
    }
    
  }

}
