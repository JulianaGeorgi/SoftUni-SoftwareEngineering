import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { AppEmailDirective } from './validators/email.directive';
import { MatSnackBarComponent } from './mat-snack-bar/mat-snack-bar.component';



@NgModule({
  declarations: [SocialButtonsComponent, AppEmailDirective, MatSnackBarComponent],
  imports: [CommonModule], 
  exports: [SocialButtonsComponent, AppEmailDirective, MatSnackBarComponent],
  providers: [MatSnackBarComponent]
})
export class SharedModule { }
