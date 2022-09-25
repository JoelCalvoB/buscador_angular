import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeekerComponent } from './screens/seeker/seeker/seeker.component';
import { UserRegisterComponent } from './screens/userRegister/user-register/user-register.component';
import { InterceptorService } from './shared/interceptor/interceptor.service';
import { BusquedaexpedienteComponent } from './screens/busquedaexpediente/busquedaexpediente.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    SeekerComponent,
    BusquedaexpedienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
