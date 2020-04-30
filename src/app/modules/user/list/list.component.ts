import { Component, OnInit } from '@angular/core';
import { TableColumnDescription } from 'src/app/components/table/table.component';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'liber-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public tableColumnDescriptions: TableColumnDescription[];

  constructor(
    public service: UserService
  ) { }

  ngOnInit(): void {
    this.tableColumnDescriptions = [
      new TableColumnDescription('name', 'Nome'),
    ]
  }

}
