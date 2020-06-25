import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports.component';


const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    // children: [
    //   { path: 'create', component: CreateComponent },
    //   { path: 'read/:id', component: ReadComponent },
    //   { path: 'update/:id', component: UpdateComponent },
    //   { path: 'delete/:id', component: DeleteComponent },
    //   { path: 'list', component: ListComponent },
    //   { path: '', redirectTo: 'list', pathMatch: 'full' },
    //   { path: '**', redirectTo: 'list' },
    // ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
