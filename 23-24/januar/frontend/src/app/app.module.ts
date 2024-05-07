import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { KupacComponent } from './components/kupac/kupac.component';
import { ProdavacComponent } from './components/prodavac/prodavac.component';
import { AukcijaComponent } from './components/aukcija/aukcija.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    KupacComponent,
    ProdavacComponent,
    AukcijaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
