import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaexpedienteComponent } from './screens/busquedaexpediente/busquedaexpediente.component';
import { MenuComponent } from './screens/menu/menu.component';
import { SeekerComponent } from './screens/seeker/seeker/seeker.component';
import { UserRegisterComponent } from './screens/userRegister/user-register/user-register.component';

const routes: Routes = [
  { path: 'seeker', component: SeekerComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'busquedaexpediente', component: BusquedaexpedienteComponent },
  { path: '**', redirectTo: 'menu', pathMatch: 'full' },
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
