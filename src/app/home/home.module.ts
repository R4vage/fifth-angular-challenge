import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms"
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {
  HamburgerComponent, 
  IngredientListComponent, 
  ChefComponent, 
  IngredientComponent, 
  SavedHamburgersComponent
}  from './components';


@NgModule({
  declarations: [
    HomeComponent,
    HamburgerComponent,
    IngredientListComponent,
    ChefComponent,
    IngredientComponent,
    SavedHamburgersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
