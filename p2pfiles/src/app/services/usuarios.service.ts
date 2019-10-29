import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  // Login(form: any): Observable<any> {
  //   const CreateProveedor = this.loginObj.login.filter((m: any) => m.name === 'authenticate')[0];
  //   return this.http.post(`${this.api.basepath}${CreateProveedor.url}`, form, { headers: CreateProveedor.headers });
  // }
}
