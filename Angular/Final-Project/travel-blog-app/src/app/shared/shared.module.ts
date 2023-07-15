import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { AppEmailDirective } from './validators/email.directive';



@NgModule({
  declarations: [SocialButtonsComponent, AppEmailDirective],
  imports: [CommonModule], 
  exports: [SocialButtonsComponent, AppEmailDirective],
})
export class SharedModule { }
