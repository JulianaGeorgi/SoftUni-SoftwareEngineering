import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';



@NgModule({
  declarations: [SocialButtonsComponent],
  imports: [CommonModule], 
  exports: [SocialButtonsComponent],
})
export class SharedModule { }
