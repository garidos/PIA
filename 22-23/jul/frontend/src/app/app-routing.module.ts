import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { KlijentComponent } from './components/klijent/klijent.component';
import { OrganizatorComponent } from './components/organizator/organizator.component';


const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"klijent", component: KlijentComponent},
  {path:"organizator", component: OrganizatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
