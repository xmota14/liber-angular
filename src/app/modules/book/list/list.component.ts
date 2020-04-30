import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { TableColumnDescription } from 'src/app/components/table/table.component';

@Component({
  selector: 'liber-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public tableColumnDescriptions: TableColumnDescription[];

  constructor(
    public service: BookService
  ) { }

  ngOnInit(): void {
    this.tableColumnDescriptions = [
      new TableColumnDescription('title', 'Título'),
      new TableColumnDescription('author', 'Author')
    ];
  }

}
