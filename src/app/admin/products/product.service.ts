import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  path_base = environment.api;

  constructor(private http: HttpClient) { }

  getProductos(){
    const url = this.path_base + '/productos';
    return this.http.get<any>(url);
  }


  crearProducto(data:any){
    const url = this.path_base + '/productos';
    return this.http.post<any>(url, data);
  }
}
