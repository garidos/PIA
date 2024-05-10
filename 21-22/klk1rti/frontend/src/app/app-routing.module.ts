import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { KupacComponent } from './components/kupac/kupac.component';
import { ZaposleniComponent } from './components/zaposleni/zaposleni.component';
import { PonudaComponent } from './components/ponuda/ponuda.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "kupac", component: KupacComponent},
  {path: "zaposleni", component: ZaposleniComponent},
  {path: "ponuda", component: PonudaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
