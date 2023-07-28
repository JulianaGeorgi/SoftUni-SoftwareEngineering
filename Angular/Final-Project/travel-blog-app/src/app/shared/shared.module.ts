import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { AppEmailDirective } from './validators/email/email.directive';
import { MatSnackBarComponent } from './mat-snack-bar/mat-snack-bar.component';
import { SlicePipe } from './pipes/slice.pipe';
import { UrlDirective } from './validators/image-url/url.directive';



@NgModule({
  declarations: [SocialButtonsComponent, AppEmailDirective, MatSnackBarComponent, SlicePipe, UrlDirective],
  imports: [CommonModule], 
  exports: [SocialButtonsComponent, AppEmailDirective, UrlDirective, MatSnackBarComponent, SlicePipe],
  providers: [MatSnackBarComponent]
})
export class SharedModule { }
