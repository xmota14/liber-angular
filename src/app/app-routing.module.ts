import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesModule } from './modules/modules.module';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'modules',
        loadChildren: () => ModulesModule
      },
      { path: '', redirectTo: 'modules', pathMatch: 'full' },
      { path: '**', redirectTo: 'modules' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
