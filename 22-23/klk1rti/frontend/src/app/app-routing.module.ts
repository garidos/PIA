import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { KlijentComponent } from './components/klijent/klijent.component';
import { DizajnerComponent } from './components/dizajner/dizajner.component';
import { RenovirajComponent } from './components/renoviraj/renoviraj.component';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"klijent", component: KlijentComponent},
  {path:"dizajner", component: DizajnerComponent},
  {path:"renoviraj", component: RenovirajComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
