import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WarningModalComponent } from './warning-modal/warning-modal.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    WarningModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    WarningModalComponent
  ]
})
export class SharedModule { }
