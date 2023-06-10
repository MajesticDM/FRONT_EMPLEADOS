import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../Enviroments/environment';
@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  private apiUrl: string = environment.apiUrl;
  constructor(private _http: HttpClient) {}
  //  Empleados
  getEmpleados(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    return this._http.get(`${this.apiUrl}empleados/cargaInicial`, {
      headers: headers,
    });
  }
  addEmpleado(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this._http.post(`${this.apiUrl}empleados`, data, {
      headers: headers,
    });
  }

  updateEmpleado(id: number, data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this._http.put(`${this.apiUrl}empleados/${id}`, data, {
      headers: headers,
    });
  }

  //Sub Areas
  getSubAreas(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    return this._http.get(`${this.apiUrl}subAreas`, {
      headers: headers,
    });
  }
  //Tipo documentos
  getTipoDocumento(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    return this._http.get(`${this.apiUrl}tipoDocumento`, {
      headers: headers,
    });
  }

  //Consultar login para generar token
  postTokenGet(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}token`, data);
  }
}
