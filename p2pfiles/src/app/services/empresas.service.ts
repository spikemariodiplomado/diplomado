import { Injectable } from '@angular/core';
import { Empresa } from '../datamodels/empresa';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  apiUrl: string = 'https://private-a28cd5a-asuocotn.apiary-mock.com/farmacia/1';

  constructor(private httpClient: HttpClient) { }

  // public getEmpresas(): Observable<Array<Empresa>> {
  public getEmpresas(): Observable<Array<Empresa>> {
    return this.httpClient.get<Array<Empresa>>(this.apiUrl);
  }

  public getEmpresa(id: string): Observable<Empresa> {
    return this.httpClient.get<any>(`${this.apiUrl}/empresa/${id}`);
  }

  //create - post
  public createEmpresa(empresa: Empresa) {
    console.log('Empresa', empresa);
    // return this.httpClient.post(`${this.apiUrl}/empresa/`, empresa);
  }
}

