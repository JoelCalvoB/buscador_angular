import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaexpedienteComponent } from './screens/busquedaexpediente/busquedaexpediente.component';
import { SeekerComponent } from './screens/seeker/seeker/seeker.component';
import { UserRegisterComponent } from './screens/userRegister/user-register/user-register.component';

const routes: Routes = [
  { path: 'seeker', component: SeekerComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'busquedaexpediente', component: BusquedaexpedienteComponent },
  { path: '**', redirectTo: 'seeker', pathMatch: 'full' },
  { path: '', redirectTo: 'seeker', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
