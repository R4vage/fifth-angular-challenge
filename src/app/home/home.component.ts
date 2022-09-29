import { replacePreviouses } from './../actions/previousHamburgers.actions';
import { RestService } from './rest.service';
import { addIngredient, replaceCurrent } from './../actions/currentHamburger.actions';
import { Hamburger } from './../models/hamburger.model';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() someInput: string = '';
  makechange() {
    this.store.dispatch(addIngredient({ ingredient: 'lettuce', index: 2 }));
  }

  /*  state$: Observable<Object> */
  constructor(
    private store: Store<{ currentHamburger: Hamburger, previousHamburgers: Hamburger[] }>,
    private RestService: RestService
  ) {
/*     let currentHamburgerState = store
      .select('currentHamburger')
      .subscribe((state) => this.updateCurrent(state)); */
  }

  ngOnInit(): void {
    this.loadUserData();
  }

  public loadUserData() {
    this.RestService.get('http://localhost:3000/currentHamburger').subscribe(
      (res) => {
        this.store.dispatch(replaceCurrent({ hamburger: res }));
      }
    );
    this.RestService.get('http://localhost:3000/previousHamburgers').subscribe(
      (res) => {
        this.store.dispatch(replacePreviouses({ hamburgers: res }));
      }
    );
  }




}
