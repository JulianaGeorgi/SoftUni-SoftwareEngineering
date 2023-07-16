import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTipComponent } from './new-tip/new-tip.component';
import { TravelTipRoutingModule} from './travel-tip-routing.module'



@NgModule({
  declarations: [
    NewTipComponent
  ],
  imports: [
    CommonModule, 
    TravelTipRoutingModule,
  ]
})
export class TravelTipModule { }
