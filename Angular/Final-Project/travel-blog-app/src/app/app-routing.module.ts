import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TravelTipsComponent } from './travel-tips/travel-tips.component';
import { TipComponent } from './travel-tip/tip/tip.component';

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

  // {
  //   path: ":userId/:id",
  //   component: TipComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
