import { replaceCurrent } from './../../../actions/currentHamburger.actions';
import { addHamburger, removeHamburger } from './../../../actions/previousHamburgers.actions';
import { Hamburger } from './../../../models/hamburger.model';
import { Store } from '@ngrx/store';
import { RestService } from './../../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-hamburgers',
  templateUrl: './saved-hamburgers.component.html',
  styleUrls: ['./saved-hamburgers.component.scss']
})
export class SavedHamburgersComponent implements OnInit {
  modalOpened : boolean = false
  previousHamburgers: Hamburger[] = []
  hamburger: Hamburger
  warningDisplayedText: string = ""
  constructor(
    private store: Store<{ currentHamburger: Hamburger, previousHamburgers: Hamburger[] }>,
    private restService: RestService
  ) {
    this.hamburger = {
      createdAt : "",
      ingredients: []
    }
    this.store.select('currentHamburger').subscribe(state => {
      this.hamburger = state
    })
    this.store.select('previousHamburgers').subscribe(state => {
      this.previousHamburgers = state
    })
   }

  ngOnInit(): void {
  }

  saveHamburger () { 
    let index = -1
    if (this.previousHamburgers.length !== 0){
      index = this.previousHamburgers.findIndex(hamburger => {
        return this.arraysEqual(hamburger.ingredients , this.hamburger.ingredients)
      })
    }
    if (this.hamburger.ingredients.length === 0) {
      index = -2
      this.showWarning ("Please, add ingredients to your hamburger")
      return;
    }
    if (index === -1) {
      let date = this.formatDate()
      this.store.dispatch(addHamburger({ hamburger:{ingredients:this.hamburger.ingredients, createdAt: date }}));
      this.restService.updatePreviouses(this.previousHamburgers)
      this.showWarning("Hamburger saved")
      return;
    }
    this.showWarning("There is already a hamburger saved with this ingredients") 
  }

  formatDate () {
    let date = new Date
    return date.toLocaleString()
  }

  openModal () {
    this.modalOpened = true
  }

  closeModal () {
    this.modalOpened = false
  }

  showWarning(text:string){
    this.warningDisplayedText = text
    setTimeout (() => {
      this.warningDisplayedText = ""
    }, 5000);
  }

  selectCurrent (hamburger: Hamburger){
    this.store.dispatch(replaceCurrent({ hamburger: hamburger }));
    this.closeModal()
    this.restService.updateCurrent(hamburger)
  }

  deleteHamburger(index:number){
    this.store.dispatch(removeHamburger({index}));
    this.restService.updatePreviouses(this.previousHamburgers)
    this.showWarning("Hamburger deleted")
  }

  arraysEqual(a:string[], b:string[]) {
    if (a === b) return true;
    if (a == null || b == null || a.length !== b.length) return false;
  
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

}
