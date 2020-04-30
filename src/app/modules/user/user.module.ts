import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ServicesModule } from 'src/app/services/services.module';
import { UserService } from 'src/app/services/user/user.service';


@NgModule({
  declarations: [UserComponent, CreateComponent, ReadComponent, UpdateComponent, DeleteComponent, ListComponent, FormComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ComponentsModule,
    ServicesModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
