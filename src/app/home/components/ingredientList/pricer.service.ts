import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PricerService {

  $prices:Map<string, number>;

  constructor() { 
    this.$prices = new Map<string, number>([
      ["lettuce",0.25],
      ["tomato",0.6],
      ["patty", 1.5],
      ["basic", 1],
      ["bacon",0.7],
      ["cheese", 0.5]
    ]);
  }

  public setPrice (ingredient: string, coin: any) {
    let ingredientPrice = this.$prices.get(ingredient)
    if (ingredientPrice) {
      if(coin === "ARS"){
        return (ingredientPrice * 280)
      } else if (coin === "MXN") {
        return ingredientPrice * 20.10
      } else if (coin === "AUD") {
        return ingredientPrice * 1.55
      } else {  
        return ingredientPrice
      }
    } else {
      return 0
    }
  }


}
