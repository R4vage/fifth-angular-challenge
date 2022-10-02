import { RestService } from './../../rest.service';
import { addIngredient } from './../../../actions/currentHamburger.actions';
import { Hamburger } from './../../../models/hamburger.model';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.scss']
})
export class ChefComponent implements OnInit {
  hamburger: Hamburger = {
    createdAt : "",
    ingredients: []
  }
  warningText: string = ""
  numbers: number[] = []
  constructor(
    private store: Store<{ currentHamburger: Hamburger, previousHamburgers: Hamburger[] }>,
    private restService: RestService,
    ) {
    this.store.select('currentHamburger').subscribe(state => {
      this.numbers = []
      this.hamburger = state
      for (let i=1; i<=state.ingredients.length; i++) {
        this.numbers.push(i+1);
      }
    })
  }

  ingredientForm = new FormGroup({
    ingredient : new FormControl ('lettuce', Validators.required),
    position : new FormControl ('1', Validators.required),
  })

  showWarning(text:string){
    this.warningText = text
    setTimeout (() => {
      this.warningText = ""
    }, 5000);
  }

  onSubmit() {
    let position = this.ingredientForm.value.position
    let ingredient = this.ingredientForm.value.ingredient
    if (this.hamburger.ingredients.length > 7) {
      this.showWarning("You can add up to 8 ingredients only")
      return;
    }
    if(position && ingredient){
      let index = parseInt(position)
      this.store.dispatch(addIngredient({ ingredient: ingredient, index: index }))
      this.restService.updateCurrent(this.hamburger)
    };
  }

  ngOnInit(): void {
  }

}
