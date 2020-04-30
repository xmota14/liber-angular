import { Injectable } from '@angular/core';
import { LIBER_BACKEND } from 'src/app/app.config';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService {

  private api: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient,
  ) {
    this.api = `${LIBER_BACKEND}${this.getApiPath()}`;
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

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.api}/${id}`, this.httpOptions)
  }

  protected abstract getApiPath(): string;
}
