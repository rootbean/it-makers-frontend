
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { appState } from '../../app.reducer';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {

  dataReducer$: string = '';

  constructor(private store: Store<appState>) {
    this.store.subscribe(state => {
      this.dataReducer$ = state.user['user'];
    });
  }

  ngOnInit(): void {
  }

}
