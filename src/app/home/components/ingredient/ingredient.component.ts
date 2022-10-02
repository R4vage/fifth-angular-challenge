import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Animations } from './ingredient.animations'

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
  animations: [
    Animations.fadeIn
  ]
})
export class IngredientComponent implements OnInit {
  @Input() ingredientName:string = ""
  constructor() { 
  }

  ngOnInit(): void {
  }
}
