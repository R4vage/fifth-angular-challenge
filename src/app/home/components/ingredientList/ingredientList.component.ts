import { Hamburger } from './../../../models/hamburger.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredientList.component.html',
  styleUrls: ['./ingredientList.component.scss']
})
export class IngredientListComponent implements OnInit {
  $ingredients:string[];
  constructor( private store: Store<{ currentHamburger: Hamburger, previousHamburgers: Hamburger[] }>) { 
    this.$ingredients = []
    this.store.select('currentHamburger').subscribe(state => {
      this.$ingredients = state.ingredients
      console.log(this.$ingredients)
    })
  }

  ngOnInit(): void {
  }

}
