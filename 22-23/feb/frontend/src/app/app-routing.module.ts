import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { KupacComponent } from './components/kupac/kupac.component';
import { ProdavacComponent } from './components/prodavac/prodavac.component';
import { PoruciComponent } from './components/poruci/poruci.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "kupac", component: KupacComponent},
  {path: "radnik", component: ProdavacComponent},
  {path: "poruci", component: PoruciComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
