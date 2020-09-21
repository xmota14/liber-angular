import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService {

  private api: string;

  httpOptions = {
    headers: new HttpHeaders({ 
      'content-type': 'application/json',
      authorization: localStorage.getItem('token')
    })
  };

  constructor(
    private httpClient: HttpClient,
  ) {
    this.api = `${environment.backendUri}${this.getApiPath()}`;
  }

  public list(): Observable<any[]> {
    return this.httpClient.get(this.api, this.httpOptions) as Observable<any[]>;
  }

  public read(id: number): Observable<any> {
    return this.httpClient.get(`${this.api}/${id}`, this.httpOptions) as Observable<any>;
  }

  public create(model: any): Observable<any> {
    return this.httpClient.post<any>(this.api, JSON.stringify(model), this.httpOptions)
  }

  public update(id: any, model: any): Observable<any> {
    return this.httpClient.put<any>(`${this.api}/${id}`, JSON.stringify(model), this.httpOptions)
  }

  public delete(id: any): Observable<any> {
    return this.httpClient.delete<any>(`${this.api}/${id}`, this.httpOptions)
  }

  protected abstract getApiPath(): string;
}
