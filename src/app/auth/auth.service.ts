import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  path_base = environment.api;

  constructor(private http: HttpClient) { }

  login(data: any){
    const url = this.path_base + '/login';
    return this.http.post<any>(url,data);
  }

}
