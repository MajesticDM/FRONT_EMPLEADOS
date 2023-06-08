import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../Enviroments/environment';
@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  private apiUrl: string = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  };
  constructor(private _http: HttpClient) {}
  //  Empleados
  getEmpleados(): Observable<any> {
    return this._http.get(`${this.apiUrl}empleados/cargaInicial`, {
      headers: this.httpOptions.headers,
    });
  }
  addEmpleado(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}empleados`, data, {
      headers: this.httpOptions.headers,
    });
  }

  updateEmpleado(id: number, data: any): Observable<any> {
    return this._http.put(`${this.apiUrl}empleados/${id}`, data, {
      headers: this.httpOptions.headers,
    });
  }

  //Sub Areas
  getSubAreas(): Observable<any> {
    return this._http.get(`${this.apiUrl}subAreas`, {
      headers: this.httpOptions.headers,
    });
  }
  //Tipo documentos
  getTipoDocumento(): Observable<any> {
    return this._http.get(`${this.apiUrl}tipoDocumento`, {
      headers: this.httpOptions.headers,
    });
  }

  //Consultar login para generar token
  postTokenGet(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}token`, data);
  }
}
