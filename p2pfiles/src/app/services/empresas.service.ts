import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../datamodels/empresa';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  apiUrl: string = '';

  constructor(private httpClient: HttpClient) { }

  getEmpresas(): Observable<Array<Empresa>> {
    return this.httpClient.get<Array<Empresa>>(this.apiUrl);
  }
}
