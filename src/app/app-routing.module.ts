import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProgramasComponent } from './programas/programas.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: UserProfileComponent },
  { path: 'programas', component: ProgramasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
