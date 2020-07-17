import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusableInputComponent } from './focusable-input.component';

describe('FocusableInputComponent', () => {
  let component: FocusableInputComponent;
  let fixture: ComponentFixture<FocusableInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusableInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusableInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
