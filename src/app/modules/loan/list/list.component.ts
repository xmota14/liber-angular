import { Component, OnInit } from '@angular/core';
import { TableColumnDescription } from 'src/app/components/table/table.component';
import { LoanService } from 'src/app/services/loan/loan.service';
import { BookService } from 'src/app/services/book/book.service';
import { PeopleService } from 'src/app/services/people/people.service';

@Component({
  selector: 'liber-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public tableColumnDescriptions: TableColumnDescription[];

  constructor(
    public service: LoanService,
    public bookService: BookService,
    public peopleService: PeopleService
  ) { }

  ngOnInit(): void {
    this.tableColumnDescriptions = [
      new TableColumnDescription('book', 'Título do livro', this.bookService, 'title'),
      new TableColumnDescription('person', 'Nome da  Pessoa', this.peopleService, 'name'),
    ];
  }

}
