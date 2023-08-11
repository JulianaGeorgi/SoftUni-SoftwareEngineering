import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTipComponent } from './new-tip/new-tip.component';
import { TipComponent } from './tip/tip.component';
import { AllTipsComponent } from './all-tips/all-tips.component';

const routes: Routes = [
  {
    path: 'all',
    component: AllTipsComponent,
  },

  {
    path: 'all/newest',
    component: AllTipsComponent,
  },
  

  {
    path: 'submitTip',
    component: NewTipComponent,
  },

  {
    path: 'all/:userId/:id',
    component: TipComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TravelTipRoutingModule { }
