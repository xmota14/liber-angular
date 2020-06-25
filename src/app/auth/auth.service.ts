import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LIBER_BACKEND } from '../app.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient,
  ) {

  }

  public login(model: any): Observable<any> {
    return this.httpClient.post<any>(`${LIBER_BACKEND}/auth/login`, JSON.stringify(model), this.httpOptions);
  }

  public logout(): Observable<any> {
    return this.httpClient.get<any>(`${LIBER_BACKEND}/auth/logout`, this.httpOptions);
  }

}
