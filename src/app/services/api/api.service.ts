import { Injectable } from '@angular/core';
import { LIBER_BACKEND } from 'src/app/app.config';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService<MODEL> {

  private api: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient,
  ) {
    this.api = `${LIBER_BACKEND}${this.getApiPath()}`;
  }

  public list(): Observable<MODEL[]> {
    return this.httpClient.get(this.api, this.httpOptions) as Observable<MODEL[]>;
  }

  public read(id: number): Observable<MODEL> {
    return this.httpClient.get(`${this.api}/${id}`, this.httpOptions) as Observable<MODEL>;
  }

  public create(model: MODEL): Observable<MODEL> {
    return this.httpClient.post<MODEL>(this.api, JSON.stringify(model), this.httpOptions)
  }

  public update(model: MODEL): Observable<MODEL> {
    return this.httpClient.put<MODEL>(this.api, JSON.stringify(model), this.httpOptions)
  }

  public delete(id: number): Observable<MODEL> {
    return this.httpClient.delete<MODEL>(`${this.api}/${id}`, this.httpOptions)
  }

  protected abstract getApiPath(): string;
}
