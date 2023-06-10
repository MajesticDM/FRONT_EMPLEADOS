import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../../componentes/servicios/empleados.service';
import { CoreService } from 'src/app/componentes/core/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginObj: any = {
    usuario: '',
    contrasena: '',
  };
  Registrado: boolean = false;
  constructor(
    private router: Router,
    private _empService: EmpleadosService,
    private _coreService: CoreService

  ) {}
  ngOnInit(): void {}

  onLogin() {
    this._empService.postTokenGet(this.loginObj)
    .subscribe(response =>{
      localStorage.setItem("token",response.token)
      this.router.navigateByUrl("Inicio")
    },error =>{
      localStorage.removeItem("token")
      this._coreService.openSnackBar('Revise sus datos, por favor.');
    })
  }
}
