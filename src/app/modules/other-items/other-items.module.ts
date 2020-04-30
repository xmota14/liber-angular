import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherItemsRoutingModule } from './other-items-routing.module';
import { OtherItemsComponent } from './other-items.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';
import { OtherItemsService } from 'src/app/services/other-items/other-items.service';
import { ComponentsModule } from 'src/app/components/components.module';
import { ServicesModule } from 'src/app/services/services.module';


@NgModule({
  declarations: [OtherItemsComponent, CreateComponent, UpdateComponent, ReadComponent, FormComponent, ListComponent, DeleteComponent],
  imports: [
    CommonModule,
    OtherItemsRoutingModule,
    ComponentsModule,
    ServicesModule
  ],
  providers: [
    OtherItemsService
  ]
})
export class OtherItemsModule { }
