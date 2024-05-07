import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DizajnerComponent } from './components/dizajner/dizajner.component';
import { KlijentComponent } from './components/klijent/klijent.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RenovirajComponent } from './components/renoviraj/renoviraj.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DizajnerComponent,
    KlijentComponent,
    LogoutComponent,
    RenovirajComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
