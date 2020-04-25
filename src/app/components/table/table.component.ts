import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'liber-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() public title: string;
  @Input() public subtitle: string;
  @Input() public service: ApiService<any>;
  @Input() public tableColumnDescriptions: TableColumnDescription[];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  public displayedColumns: string[];
  public dataSource = new MatTableDataSource<any>();

  constructor() {
    this.displayedColumns = new Array();
  }

  ngOnInit() {
    this.setDisplayedColumns();

    this.service.list().subscribe((response) => {
      this.dataSource.data = response;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  private setDisplayedColumns(): void {
    for (let i = 0; i < this.tableColumnDescriptions.length; i++) {
      this.displayedColumns[i] = this.tableColumnDescriptions[i].name;
    }
    this.displayedColumns[this.tableColumnDescriptions.length] = 'actions';
  }

}

export class TableColumnDescription {

  constructor(
    public name: string,
    public label: string
  ) {

  }
}
