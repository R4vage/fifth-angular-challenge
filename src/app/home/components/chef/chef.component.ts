import { addIngredient } from './../../../actions/currentHamburger.actions';
import { Hamburger } from './../../../models/hamburger.model';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.scss']
})
export class ChefComponent implements OnInit {
  
  $numbers: number[]
  constructor(private store: Store<{ currentHamburger: Hamburger, previousHamburgers: Hamburger[] }>) {
    this.$numbers = []
    this.store.select('currentHamburger').subscribe(state => {
      this.$numbers = []
      for (let i=1; i<=state.ingredients.length; i++) {
        this.$numbers.push(i+1);
      }
    })

  }

  ingredientForm = new FormGroup({
    ingredient : new FormControl ('lettuce', Validators.required),
    position : new FormControl ('1', Validators.required),
  })

  onSubmit() {
    let position = this.ingredientForm.value.position
    let ingredient = this.ingredientForm.value.ingredient
    if(position && ingredient){
      let index = parseInt(position)
      this.store.dispatch(addIngredient({ ingredient: ingredient, index: index }))
    };
  }

  ngOnInit(): void {
  }

}
