import { trigger, transition, style } from '@angular/animations';
import { Store } from '@ngrx/store';
import { Hamburger } from './../../../models/hamburger.model';
import { Component, Input, OnInit } from '@angular/core';


const enterTransition = transition(':enter', [
  style({
    opacity:0
  }),

])
const fadeIn = trigger('fadeIn', [])

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
  animations: [fadeIn]

})
export class HamburgerComponent implements OnInit {
  $ingredients:string[];

  constructor(private store: Store<{ currentHamburger: Hamburger, previousHamburgers: Hamburger[] }>) { 
    this.$ingredients = []
    this.store.select('currentHamburger').subscribe(state => {
      this.$ingredients = state.ingredients
    })

  }

  ngOnInit(): void {
  }

}
