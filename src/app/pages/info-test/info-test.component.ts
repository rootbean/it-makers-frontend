import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-test',
  templateUrl: './info-test.component.html',
  styleUrls: ['./info-test.component.css']
})
export class InfoTestComponent implements OnInit {

  title = 'IT MAKERS FRONTEND';

  constructor() { }

  ngOnInit(): void {
  }

}
