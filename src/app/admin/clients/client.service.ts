import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  path_base = environment.api;

  constructor(private http: HttpClient) { }

  getClientes(){
    const url = this.path_base + '/clientes';
    return this.http.get<any>(url);
  }

  nuevoCliente(data: any){
    const url = this.path_base + '/clientes';
    return this.http.post<any>(url, data);
  }
}
