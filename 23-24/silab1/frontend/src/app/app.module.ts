import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './components/student/student.component';
import { RouterModule } from '@angular/router';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { IspitiComponent } from './components/ispiti/ispiti.component';
import { OcjeneComponent } from './components/ocjene/ocjene.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    PocetnaComponent,
    IspitiComponent,
    OcjeneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
