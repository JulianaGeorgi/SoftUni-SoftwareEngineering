import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTipComponent } from './new-tip/new-tip.component';
import { TipComponent } from './tip/tip.component';
import { AllTipsComponent } from './all-tips/all-tips.component';

const routes: Routes = [
  {
    path: "newtip",
    component: NewTipComponent,
  },

  {
    path: "traveltips/:userId/:id",
    component: TipComponent,
  },

  {
    path: "traveltips",
    component: AllTipsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TravelTipRoutingModule { }
