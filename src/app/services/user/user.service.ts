import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  protected getApiPath(): string {
    return '/usuarios';
  }

}
