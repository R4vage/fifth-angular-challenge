import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms"
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { IngredientListComponent } from './components/ingredientList/ingredientList.component';
import { ChefComponent } from './components/chef/chef.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';


@NgModule({
  declarations: [
    HomeComponent,
    HamburgerComponent,
    IngredientListComponent,
    ChefComponent,
    IngredientComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
