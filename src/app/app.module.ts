import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { LotesComponent } from './components/lotes/lotes.component';
import { LoginComponent } from './login/login.component';
import { TemporalidadComponent } from './components/temporalidad/temporalidad.component';
import { VentalotesComponent } from './components/ventalotes/ventalotes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PagosComponent,
    LotesComponent,
    LoginComponent,
    TemporalidadComponent,
    VentalotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
