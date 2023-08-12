import { Component, OnInit } from '@angular/core';
import { TipService } from '../tip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBarComponent } from 'src/app/shared/mat-snack-bar/mat-snack-bar.component';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-tip',
  templateUrl: './update-tip.component.html',
  styleUrls: ['./update-tip.component.css']
})


export class UpdateTipComponent implements OnInit {

  @Output() closeUpdateTipEvent = new EventEmitter<boolean>();

  // reactive form group
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

  closeUpdateTip(value: boolean) {
    this.closeUpdateTipEvent.emit(value);
  }

  onEditTip(): void {

    if (this.tipForm.invalid) {
      return;
    }

    const tipDetails = this.tipForm.value;

    this.tipService.editTip(tipDetails, this.userId, this.tipId);

    const confirmMessage = "Tip edited successfully.";
    this.snackBar.openSnackBar(confirmMessage, 'Great!');

    this.closeUpdateTip(false); // hide edit form -> passing the info to the parent component (tip)

    this.router.navigate([`traveltips/all/${this.userId}/${this.tipId}`]);
  };

  ngOnInit(): void {
  }

}
