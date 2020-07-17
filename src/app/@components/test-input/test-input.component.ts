import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.css']
})
export class TestInputComponent implements OnInit {

  @Input() ref: string = ''; 
  @Output() newRef = new EventEmitter<string>();

  dataRef: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  newRefBtn() {
    this.newRef.emit(this.dataRef);
  }

}
