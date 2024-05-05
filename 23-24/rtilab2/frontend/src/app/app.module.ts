import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StartComponent } from './components/start/start.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './components/student/student.component';
import { NastavnikComponent } from './components/nastavnik/nastavnik.component';
import { PrijavaComponent } from './components/prijava/prijava.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    StudentComponent,
    NastavnikComponent,
    PrijavaComponent
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
