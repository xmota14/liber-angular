import { Component, OnInit } from '@angular/core';
import { OtherItemsService } from 'src/app/services/other-items/other-items.service';
import { TableColumnDescription } from 'src/app/components/table/table.component';
import { PeopleService } from 'src/app/services/people/people.service';

@Component({
  selector: 'liber-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public tableColumnDescriptions: TableColumnDescription[];

  constructor(
    public service: PeopleService
  ) { }

  ngOnInit(): void {
    this.tableColumnDescriptions = [
      new TableColumnDescription('name', 'Nome'),
      new TableColumnDescription('class', 'Curso'),
    ];
  }

}
