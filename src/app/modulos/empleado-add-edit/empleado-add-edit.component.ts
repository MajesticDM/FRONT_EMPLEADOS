import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EmpleadosService } from '../../componentes/servicios/empleados.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../../componentes/core/core.service';

@Component({
  selector: 'app-empleado-add-edit',
  templateUrl: './empleado-add-edit.component.html',
  styleUrls: ['./empleado-add-edit.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    MatInputModule,
    MatButtonModule,
  ],
})
export class EmpleadoAddEditComponent implements OnInit {
  empForm: FormGroup;
  opciones: any[] = [];
  subAreas: any[] = [];

  constructor(
    private _fb: FormBuilder,
    private _empService: EmpleadosService,
    private _dialogRef: MatDialogRef<EmpleadoAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      idxSubArea: 0,
      idxTipoDocumento: 0,
      documento: '',
      nombres: '',
      apellidos: '',
    });
  }
  ngOnInit(): void {
    this._empService
      .getTipoDocumento()
      .subscribe({next: (res) => {
        this.opciones = res
      }})

      this._empService
      .getSubAreas()
      .subscribe({next: (res) => {
        this.subAreas = res
      }})

    this.empForm.patchValue(this.data);
  }
  onFormSubmit() {
    
    if (this.empForm.valid) {
      if (this.data) {
        this._empService
          .updateEmpleado(this.data.idEmpleado, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Usuario actualizado');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._empService.addEmpleado(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Usuario guardado');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
