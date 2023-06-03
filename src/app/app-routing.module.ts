import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AuthGuard } from './componentes/Auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    canActivate:[AuthGuard],
    path:'Inicio',
    component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
