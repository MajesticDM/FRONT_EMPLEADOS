import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(mensage: string, accion: string = 'Aceptar') {
    this._snackBar.open(mensage, accion, {
      duration: 2000,
      verticalPosition: 'top',
    });
  }
}
