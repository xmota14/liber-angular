import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
    return this.httpClient.post<any>(`${environment.backendUri}/auth/login`, JSON.stringify(model), this.httpOptions);
  }

  public logout(): Observable<any> {
    return this.httpClient.get<any>(`${environment.backendUri}/auth/logout`, this.httpOptions);
  }

}
