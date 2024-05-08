import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ClanComponent } from './components/clan/clan.component';
import { VodjaComponent } from './components/vodja/vodja.component';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"clan", component: ClanComponent},
  {path:"vodja", component: VodjaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
