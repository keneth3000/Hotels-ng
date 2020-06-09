import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { EditComponent } from './components/users/edit/edit.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: 'signin',
    loadChildren: () => import('./auth/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./auth/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'edit',
    component: EditComponent
  },
  { path: 'signinhotel', loadChildren: () => import('./auth/signin-hotel/signin-hotel.module').then(m => m.SigninHotelModule) },
  { path: 'account-hotel', loadChildren: () => import('./auth/account-hotel/account-hotel.module').then(m => m.AccountHotelModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
