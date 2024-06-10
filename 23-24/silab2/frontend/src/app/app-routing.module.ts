import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RadnikComponent } from './components/radnik/radnik.component';
import { KupacComponent } from './components/kupac/kupac.component';

const routes: Routes = [
  {path: "", component: LoginComponent },
  {path: "radnik", component: RadnikComponent},
  {path: "kupac", component: KupacComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
