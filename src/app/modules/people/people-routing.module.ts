import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { ListOverdueComponent } from './list-overdue/list-overdue.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent,
    children: [
      { path: 'create', component: CreateComponent },
      { path: 'read/:id', component: ReadComponent },
      { path: 'update/:id', component: UpdateComponent },
      { path: 'delete/:id', component: DeleteComponent },
      { path: 'list', component: ListComponent },
      { path: 'list-overdue', component: ListOverdueComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '**', redirectTo: 'list' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
