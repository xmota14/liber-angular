import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from './book/book.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServicesModule { }
