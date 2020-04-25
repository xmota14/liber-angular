import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService extends ApiService<Book> {
  protected getApiPath(): string {
    return '/book';
  }

}
