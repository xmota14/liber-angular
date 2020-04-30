import { Component, OnInit } from '@angular/core';
import { TableColumnDescription } from 'src/app/components/table/table.component';
import { LoanService } from 'src/app/services/loan/loan.service';

@Component({
  selector: 'liber-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public tableColumnDescriptions: TableColumnDescription[];

  constructor(
    public service: LoanService
  ) { }

  ngOnInit(): void {
    this.tableColumnDescriptions = [
      new TableColumnDescription('book', 'Código do livro'),
      new TableColumnDescription('person', 'Código da pessoa'),
    ];
  }

}
