import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanComponent } from './loan.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {
    path: '',
    component: LoanComponent,
    children: [
      { path: 'create', component: CreateComponent },
      { path: 'read/:id', component: ReadComponent },
      { path: 'update/:id', component: UpdateComponent },
      { path: 'delete/:id', component: DeleteComponent },
      { path: 'list', component: ListComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '**', redirectTo: 'list' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
