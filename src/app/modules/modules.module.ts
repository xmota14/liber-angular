import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ModulesComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class ModulesModule { }
