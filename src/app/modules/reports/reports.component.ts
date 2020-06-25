import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports/reports.service';

@Component({
  selector: 'liber-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor(
    private service: ReportsService
  ) { }

  ngOnInit(): void {
    this.service.list().subscribe((reponse) => {
      console.log(reponse);
    })
  }

}
