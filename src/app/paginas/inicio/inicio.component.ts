import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpleadoAddEditComponent } from 'src/app/modulos/empleado-add-edit/empleado-add-edit.component';
import { EmpleadosService } from 'src/app/componentes/servicios/empleados.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from 'src/app/componentes/core/core.service';
import { core } from '@angular/compiler';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  displayedColumns: string[] = [
    'idEmpleado',
    'area',
    'subArea',
    'tipoDocumento',
    'documento',
    'nombres',
    'apellidos',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _empServicios: EmpleadosService,
    private _coreService: CoreService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.getEmpleados();
  }
  onLogOut(){
    localStorage.removeItem("token")
    this.router.navigateByUrl("")
  }
  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(EmpleadoAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmpleados();
        }
      },
    });
  }

  getEmpleados() {
    this._empServicios.getEmpleados().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => {
        this._coreService.openSnackBar('Ocurrió un error.');
      },
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(EmpleadoAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmpleados();
        }
      },
    });
  }
}
