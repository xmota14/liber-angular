import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { ServicesModule } from 'src/app/services/services.module';
import { PeopleService } from 'src/app/services/people/people.service';
import { ReportsService } from 'src/app/services/reports/reports.service';


@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    ServicesModule
  ],
  providers: [
    ReportsService
  ]
})
export class ReportsModule { }
