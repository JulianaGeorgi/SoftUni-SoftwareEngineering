import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTipComponent } from './new-tip/new-tip.component';
import { TravelTipRoutingModule} from './travel-tip-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TipComponent } from './tip/tip.component';
import { UpdateTipComponent } from './update-tip/update-tip.component';
import { AllTipsComponent } from './all-tips/all-tips.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NewTipComponent,
    TipComponent,
    UpdateTipComponent, 
    AllTipsComponent
  ],
  imports: [
    CommonModule, 
    SharedModule,
    TravelTipRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ], 
  exports: [TipComponent, AllTipsComponent],
})
export class TravelTipModule { }
