import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AgencijaComponent } from './components/agencija/agencija.component';
import { PutnikComponent } from './components/putnik/putnik.component';
import { KupiComponent } from './components/kupi/kupi.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'putnik', component: PutnikComponent},
  { path: 'agencija', component: AgencijaComponent},
  { path: 'kupi', component: KupiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
