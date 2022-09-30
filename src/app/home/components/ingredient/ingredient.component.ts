import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
})
export class IngredientComponent implements OnInit {
  @Input() ingredientName:string = ""
  activeClass:boolean = false

  constructor() { 
    
  }
  ngOnInit(): void {
    this.activeClass = true
  }

}
