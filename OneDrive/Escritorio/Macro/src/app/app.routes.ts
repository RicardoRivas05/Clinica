import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo:'/login', pathMatch:'full'}
];

@NgModule
({
  imports: [RouterModule.forRoot(routes, {useHash:true}),
    PagesRoutingModule,
  ]
})

export class AppRoutingModule {}
