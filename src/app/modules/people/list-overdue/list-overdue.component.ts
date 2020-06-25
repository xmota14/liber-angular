import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports/reports.service';
import { TableColumnDescription } from 'src/app/components/table/table.component';

@Component({
  selector: 'liber-list-overdue',
  templateUrl: './list-overdue.component.html',
  styleUrls: ['./list-overdue.component.scss']
})
export class ListOverdueComponent implements OnInit {

  public tableColumnDescriptions: TableColumnDescription[];

  constructor(
    public service: ReportsService
  ) { }

  ngOnInit(): void {
    this.tableColumnDescriptions = [
      new TableColumnDescription('name', 'Nome'),
      new TableColumnDescription('class', 'Curso'),
    ];
  }

}
