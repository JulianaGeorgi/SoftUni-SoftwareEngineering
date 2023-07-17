import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTipComponent } from './new-tip/new-tip.component';
import { TravelTipRoutingModule} from './travel-tip-routing.module'
import { FormsModule } from '@angular/forms';
import { TipComponent } from './tip/tip.component';



@NgModule({
  declarations: [
    NewTipComponent,
    TipComponent
  ],
  imports: [
    CommonModule, 
    TravelTipRoutingModule,
    FormsModule
  ], 
  exports: [TipComponent],
})
export class TravelTipModule { }
