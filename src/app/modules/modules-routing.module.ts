import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookModule } from './book/book.module';
import { ModulesComponent } from './modules.component';
import { OtherItemsModule } from './other-items/other-items.module';
import { UserModule } from './user/user.module';
import { PeopleModule } from './people/people.module';
import { LoanModule } from './loan/loan.module';
import { ReportsModule } from './reports/reports.module';


const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      {
        path: 'book',
        loadChildren: () => BookModule
      },
      {
        path: 'other-items',
        loadChildren: () => OtherItemsModule
      },
      {
        path: 'user',
        loadChildren: () => UserModule
      },
      {
        path: 'people',
        loadChildren: () => PeopleModule
      },
      {
        path: 'loan',
        loadChildren: () => LoanModule
      },
      {
        path: 'reports',
        loadChildren: () => ReportsModule
      },
      { path: '', redirectTo: 'book', pathMatch: 'full' },
      { path: '**', redirectTo: 'book' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
