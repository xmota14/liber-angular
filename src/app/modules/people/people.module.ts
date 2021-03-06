import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { PeopleRoutingModule } from './people-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ServicesModule } from 'src/app/services/services.module';
import { PeopleService } from 'src/app/services/people/people.service';
import { ListOverdueComponent } from './list-overdue/list-overdue.component';
import { ReportsService } from 'src/app/services/reports/reports.service';



@NgModule({
  declarations: [PeopleComponent, CreateComponent, UpdateComponent, ReadComponent, DeleteComponent, ListComponent, FormComponent, ListOverdueComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    ComponentsModule,
    ServicesModule
  ],
  providers: [
    PeopleService,
    ReportsService
  ]
})
export class PeopleModule { }
