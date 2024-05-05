import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { IspitiComponent } from './components/ispiti/ispiti.component';
import { OcjeneComponent } from './components/ocjene/ocjene.component';

const routes: Routes = [ {path:"student", component: StudentComponent},
  { path:"", component: PocetnaComponent},
  { path:"ispiti", component: IspitiComponent},
  { path:"ocjene", component: OcjeneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
