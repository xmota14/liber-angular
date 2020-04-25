import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { CreateComponent } from './create/create.component';
import { BookComponent } from './book.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ServicesModule } from 'src/app/services/services.module';
import { BookService } from 'src/app/services/book/book.service';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [CreateComponent, BookComponent, ListComponent, FormComponent, ReadComponent, UpdateComponent, DeleteComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    ComponentsModule,
    ServicesModule
  ],
  providers: [
    BookService
  ]
})
export class BookModule { }
