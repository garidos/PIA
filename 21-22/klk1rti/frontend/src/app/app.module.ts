import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { KupacComponent } from './components/kupac/kupac.component';
import { ZaposleniComponent } from './components/zaposleni/zaposleni.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PonudaComponent } from './components/ponuda/ponuda.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    KupacComponent,
    ZaposleniComponent,
    PonudaComponent
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
