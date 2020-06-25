import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRoutingModule } from './loan-routing.module';
import { LoanComponent } from './loan.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ServicesModule } from 'src/app/services/services.module';
import { LoanService } from 'src/app/services/loan/loan.service';
import { UserService } from 'src/app/services/user/user.service';
import { BookService } from 'src/app/services/book/book.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { PeopleService } from 'src/app/services/people/people.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ListOverdueComponent } from './list-overdue/list-overdue.component';
import { ReportsService } from 'src/app/services/reports/reports.service';



@NgModule({
  declarations: [LoanComponent, CreateComponent, ReadComponent, UpdateComponent, DeleteComponent, ListComponent, FormComponent, ListOverdueComponent],
  imports: [
    CommonModule,
    LoanRoutingModule,
    ComponentsModule,
    ServicesModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule,
    MatSelectModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    LoanService,
    UserService,
    BookService,
    PeopleService,
    ReportsService,
    MatDatepickerModule
  ]
})
export class LoanModule { }
