import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import * as moment from 'moment';
import { Usuario } from '../datamodels/usuario';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  timeSession = 0;
  constructor(
    private http: HttpClient
  ) { }

  getToken(): string {
    return sessionStorage.getItem('_token');
  }

  setToken(token: string): void {
    sessionStorage.setItem('_token', token);
  }

  getTokenExpirationDate(token: string): Date {
    let date = new Date(0);
    if (sessionStorage.getItem('_timeSession') === null) {
      const decoded = jwt_decode(token);

      if (decoded.exp === undefined) { return null; }

      date.setUTCSeconds(decoded.exp);
      sessionStorage.setItem('_timeSession', date.toString());
    } else {
      this.timeSession = 30;
      date = new Date(sessionStorage.getItem('_timeSession'));

      if ((date.valueOf() > new Date().valueOf())) {
        date = moment(Date.now()).add(this.timeSession, 'm').toDate();
        sessionStorage.setItem('_timeSession', date.toString());
      }
    }

    return date;
  }

  setLoggedUser() {
    const token = this.getToken();
    const decoded = jwt_decode(token);
    sessionStorage.setItem('_currentUser', decoded.unique_name);
  }

  getLoggedUser() {
    return JSON.parse(sessionStorage.getItem('_currentUser'));
  }

  updateLoggedUser(usuario: Usuario) {
    sessionStorage.setItem('_currentUser', JSON.stringify(usuario));
  }

  setLoggedOut() {
    sessionStorage.clear();
  }

  isTokenExpired(token?: string): boolean {
    if (!token) { token = this.getToken(); }
    if (!token) { return true; }

    const date = this.getTokenExpirationDate(token);
    // console.log(date, 'fecha expiracion');
    if (date === undefined) { return false; }
    return !(date.valueOf() > new Date().valueOf());
  }
}
