import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { StudentComponent } from './components/student/student.component';
import { NastavnikComponent } from './components/nastavnik/nastavnik.component';
import { AktivnostComponent } from './components/aktivnost/aktivnost.component';

const routes: Routes = [
  {path:"", component: PocetnaComponent},
  {path:"student", component: StudentComponent},
  {path:"nastavnik", component: NastavnikComponent},
  {path:"aktivnost", component: AktivnostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
