import { Store } from '@ngrx/store';
import { Hamburger } from './../../../models/hamburger.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {
  $ingredients:string[];
  constructor(private store: Store<{ currentHamburger: Hamburger, previousHamburgers: Hamburger[] }>) { 
    this.$ingredients = []
    this.store.select('currentHamburger').subscribe(state => {
      this.$ingredients = state.ingredients
      console.log(this.$ingredients)
    })

  }

  ngOnInit(): void {
  }

}
