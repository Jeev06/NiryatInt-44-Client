import { NgModule } from '@angular/core';

import { AuthGuard } from './core/guards/auth.guard';

import { LoginAuthGuard } from './core/guards/login-auth.guard';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: 'user', loadChildren: () => import('./modules/layouts/layouts.module').then(m => m.LayoutsModule) , canActivate: [AuthGuard],},
{ path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) , canActivate: [LoginAuthGuard],},
{path : "", redirectTo: "auth/login"  , pathMatch : "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
