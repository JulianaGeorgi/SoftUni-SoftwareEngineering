import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home",
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'traveltips',
    loadChildren: () => import('./travel-tip/travel-tip.module').then((m) => m.TravelTipModule)
  },

  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  },

  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})], // auto scroll to the page top on route change!!
  exports: [RouterModule]
})

export class AppRoutingModule { }