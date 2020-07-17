import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseFiveComponent } from './exercise-five.component';

describe('ExerciseFiveComponent', () => {
  let component: ExerciseFiveComponent;
  let fixture: ComponentFixture<ExerciseFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
