import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientListComponent } from './ingredientList.component';

describe('IngredientsListComponent', () => {
  let component: IngredientListComponent;
  let fixture: ComponentFixture<IngredientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
