import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

export class EmpleadosService {

  constructor(private _http: HttpClient) {}
//  Empleados
  getEmpleados(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
    })
    return this._http.get('https://localhost:44348/api/Empleados/cargaInicial',{headers:headers});
  }
  addEmpleado(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
    })
    return this._http.post('https://localhost:44348/api/Empleados', data,{headers:headers});
  }

  updateEmpleado(id: number, data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
    })
    return this._http.put(`https://localhost:44348/api/Empleados/${id}`, data,{headers:headers});
  }

  //Sub Areas
  getSubAreas(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
    })
    return this._http.get('https://localhost:44348/api/subAreas',{headers:headers});
  }
  //Tipo documentos
  getTipoDocumento(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
    })
    return this._http.get('https://localhost:44348/api/tipoDocumento',{headers:headers});
  }

  //Consultar login para generar token
  postTokenGet(data: any): Observable<any>{
    return this._http.post("https://localhost:44348/api/Token",data);
  }
}
