import { Component, OnInit } from '@angular/core';
import { TableColumnDescription } from 'src/app/components/table/table.component';
import { BookService } from 'src/app/services/book/book.service';
import { PeopleService } from 'src/app/services/people/people.service';
import { ReportsService } from 'src/app/services/reports/reports.service';

@Component({
  selector: 'liber-list-overdue',
  templateUrl: './list-overdue.component.html',
  styleUrls: ['./list-overdue.component.scss']
})
export class ListOverdueComponent implements OnInit {

  public tableColumnDescriptions: TableColumnDescription[];

  constructor(
    public service: ReportsService,
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
