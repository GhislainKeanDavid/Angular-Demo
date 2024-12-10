import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then( m => m.LoginModule)
      },
    
      {
        path: 'sign-up',
        loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }