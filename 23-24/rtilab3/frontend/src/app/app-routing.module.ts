import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { RegistrovaniComponent } from './components/registrovani/registrovani.component';
import { ListaZeljaComponent } from './components/lista-zelja/lista-zelja.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "administrator", component: AdminComponent},
  {path: "registrovani", component: RegistrovaniComponent},
  {path: "listaZelja", component: ListaZeljaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
