import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTipComponent } from './new-tip/new-tip.component';
import { TravelTipRoutingModule} from './travel-tip-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TipComponent } from './tip/tip.component';
import { UpdateTipComponent } from './update-tip/update-tip.component';



@NgModule({
  declarations: [
    NewTipComponent,
    TipComponent,
    UpdateTipComponent
  ],
  imports: [
    CommonModule, 
    TravelTipRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ], 
  exports: [TipComponent],
})
export class TravelTipModule { }
