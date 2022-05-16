import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaFormComponent } from './formulaire.component';

describe('FormulaireComponent', () => {
  let component: PizzaFormComponent;
  let fixture: ComponentFixture<PizzaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
