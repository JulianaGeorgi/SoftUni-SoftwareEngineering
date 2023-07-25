import { Component, OnInit } from '@angular/core';
import { TipService } from '../tip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBarComponent } from 'src/app/shared/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-update-tip',
  templateUrl: './update-tip.component.html',
  styleUrls: ['./update-tip.component.css']
})
export class UpdateTipComponent implements OnInit {
  
  tipForm = this.formBuilder.group({
    tipTitle: ['', [Validators.required, Validators.minLength(3)]],
    authorName: ['', [Validators.required]],
    imageUrl: ['', [Validators.required]],
    tipContent: ['', [Validators.required, Validators.minLength(10)]],
  });

  userId: string | null = this.route.snapshot.paramMap.get('userId');
  tipId: string | null = this.route.snapshot.paramMap.get('id');

  tip$ = this.tipService.getOneTip(this.userId, this.tipId)
    .subscribe((tip) => {
      this.tipForm.setValue({
        tipTitle: tip.tipTitle,
        authorName: tip.authorName,
        imageUrl: tip.imageUrl,
        tipContent: tip.tipContent,
      });
    })

  constructor(
    private tipService: TipService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBarComponent
  ) { }

  onEditTip(): void {

    const tipDetails = this.tipForm.value;

    this.tipService.editTip(tipDetails, this.userId, this.tipId);

    //TODO: pass the state to the tip.component - showUpdatePost is now false (edit form must be hidden)

    const confirmMessage = "Tip edited successfully.";
    this.snackBar.openSnackBar(confirmMessage, 'Great!');

    this.router.navigate([`traveltips/all/${this.userId}/${this.tipId}`]);
  };

  ngOnInit(): void {
  }

}
