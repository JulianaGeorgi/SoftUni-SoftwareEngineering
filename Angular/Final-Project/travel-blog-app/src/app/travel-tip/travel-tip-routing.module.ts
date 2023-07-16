import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTipComponent } from './new-tip/new-tip.component';
import { TravelTipsComponent } from '../travel-tips/travel-tips.component';

const routes: Routes = [
  {
    path: "newtip",
    component: NewTipComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TravelTipRoutingModule { }
