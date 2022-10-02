import { RestService } from './../../rest.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Hamburger } from './../../../models/hamburger.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeIngredient } from './../../../actions/currentHamburger.actions';
import { PricerService } from './pricer.service'


@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredientList.component.html',
  styleUrls: ['./ingredientList.component.scss']
})
export class IngredientListComponent implements OnInit {
  
  hamburger: Hamburger
  $ingredients:string[];
  $priceList: number[];
  constructor( 
    private store: Store<{ currentHamburger: Hamburger, previousHamburgers: Hamburger[] }>,
    private pricerService:PricerService,
    private restService: RestService
    ) { 
    this.hamburger = {
      createdAt : "",
      ingredients: []
    }
    this.$ingredients = []
    this.$priceList = []
    this.store.select('currentHamburger').subscribe(state => {
      this.$ingredients = state.ingredients
      this.makePriceList()
      this.hamburger = state
    })
  }

  currencyForm = new FormGroup({
    currency : new FormControl ('USD', Validators.required),
  })

  ngOnInit(): void {
  }

  removeIngredient(index:number){
    this.store.dispatch(removeIngredient({ index }));
    this.restService.updateCurrent(this.hamburger)
  }

  makePriceList () {
    this.$priceList = []
    this.$priceList.push(this.pricerService.setPrice("basic", this.currencyForm.value.currency))
    this.$ingredients.map(ingredient =>{
      this.$priceList.push(this.pricerService.setPrice(ingredient, this.currencyForm.value.currency))
    })
  }

  getTotal (priceList: number[]) {
    return priceList.reduce((partialSum, a) => partialSum + a, 0);
  }


}
