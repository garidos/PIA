import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { StudentComponent } from './components/student/student.component';
import { NastavnikComponent } from './components/nastavnik/nastavnik.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './components/logout/logout.component';
import { AktivnostComponent } from './components/aktivnost/aktivnost.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    StudentComponent,
    NastavnikComponent,
    LogoutComponent,
    AktivnostComponent
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
