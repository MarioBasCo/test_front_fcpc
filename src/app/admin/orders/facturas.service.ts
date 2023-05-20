import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {
  path_base = environment.api;

  constructor(private http: HttpClient) { }

  createFactura(data: any){
    const url = this.path_base + '/facturas';
    return this.http.post<any>(url, data);
  }

  listar(){
    const url = this.path_base + '/facturas';
    return this.http.get<any>(url);
  }
}
