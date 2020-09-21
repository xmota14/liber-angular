import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesModule } from './modules/modules.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'modules',
        loadChildren: () => ModulesModule
      },
      {
        path: 'auth',
        loadChildren: () => AuthModule
      },
      { path: '', redirectTo: 'auth', pathMatch: 'full' },
      { path: '**', redirectTo: 'auth' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
