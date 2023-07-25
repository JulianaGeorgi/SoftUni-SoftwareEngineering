import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { AppEmailDirective } from './validators/email.directive';
import { MatSnackBarComponent } from './mat-snack-bar/mat-snack-bar.component';
import { SlicePipe } from './pipes/slice.pipe';



@NgModule({
  declarations: [SocialButtonsComponent, AppEmailDirective, MatSnackBarComponent, SlicePipe],
  imports: [CommonModule], 
  exports: [SocialButtonsComponent, AppEmailDirective, MatSnackBarComponent, SlicePipe],
  providers: [MatSnackBarComponent]
})
export class SharedModule { }
