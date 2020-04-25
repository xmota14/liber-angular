import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookModule } from './book/book.module';
import { ModulesComponent } from './modules.component';


const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      {
        path: 'book',
        loadChildren: () => BookModule
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
