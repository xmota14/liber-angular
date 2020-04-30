import { Component, OnInit } from '@angular/core';
import { OtherItemsService } from 'src/app/services/other-items/other-items.service';
import { TableColumnDescription } from 'src/app/components/table/table.component';

@Component({
  selector: 'liber-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public tableColumnDescriptions: TableColumnDescription[];

  constructor(
    public service: OtherItemsService
  ) { }

  ngOnInit(): void {
    this.tableColumnDescriptions = [
      new TableColumnDescription('itemName', 'Nome'),
      new TableColumnDescription('itemDescription', 'Descrição'),
    ];
  }

}
