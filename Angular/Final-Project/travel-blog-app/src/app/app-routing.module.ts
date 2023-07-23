import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TravelTipsComponent } from './travel-tips/travel-tips.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home",
  },

  {
    path: "home",
    component: HomeComponent,
  },

  {
    path: "traveltips",
    component: TravelTipsComponent,
  },

  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
