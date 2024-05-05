import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { StudentComponent } from './components/student/student.component';
import { NastavnikComponent } from './components/nastavnik/nastavnik.component';
import { PrijavaComponent } from './components/prijava/prijava.component';

const routes: Routes = [ { path:"", component: StartComponent },
 { path:"student", component: StudentComponent },
  { path:"nastavnik", component: NastavnikComponent },
  { path:"prijava", component: PrijavaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
