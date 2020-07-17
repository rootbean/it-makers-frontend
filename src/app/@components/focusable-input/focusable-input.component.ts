import { Component, OnInit, Input } from '@angular/core';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-focusable-input',
  templateUrl: './focusable-input.component.html',
  styleUrls: ['./focusable-input.component.css']
})
export class FocusableInputComponent implements OnInit {

  @Input() focused: boolean = true;

  constructor() { }

  ngOnInit(): void {
    
  }

}
