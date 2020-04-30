import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LIBER_BACKEND } from '../app.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient,
  ) {
    this.api = `${LIBER_BACKEND}/auth/login`;
  }

  public login(model: any): Observable<any> {
    return this.httpClient.post<any>(this.api, JSON.stringify(model), this.httpOptions);
  }

}
