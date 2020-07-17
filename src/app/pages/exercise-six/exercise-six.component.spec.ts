import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseSixComponent } from './exercise-six.component';

describe('ExerciseSixComponent', () => {
  let component: ExerciseSixComponent;
  let fixture: ComponentFixture<ExerciseSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
