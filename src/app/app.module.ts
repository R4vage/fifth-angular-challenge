/* import { HamburgerEffects } from './effects/hamburger.effect'; */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { currentHamburgerReducer } from './reducers/currentHamburger.reducer';
import { previousHamburgersReducer } from './reducers/previousHamburgers.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      currentHamburger: currentHamburgerReducer,
      previousHamburgers: previousHamburgersReducer,
    }),
    HomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([
      /* HamburgerEffects */
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
