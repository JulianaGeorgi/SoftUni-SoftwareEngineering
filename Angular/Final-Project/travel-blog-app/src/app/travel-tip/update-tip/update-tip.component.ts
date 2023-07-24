import { Component, OnInit } from '@angular/core';
import { TipService } from '../tip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-tip',
  templateUrl: './update-tip.component.html',
  styleUrls: ['./update-tip.component.css']
})
export class UpdateTipComponent implements OnInit {

  showUpdatePost = false;

  postForm = new FormGroup({
    tipTitle: new FormControl(''),
    authorName: new FormControl(''),
    imageUrl: new FormControl(''),
    tipContent: new FormControl(''),
  });

  userId: string | null = this.route.snapshot.paramMap.get('userId');
  tipId: string | null = this.route.snapshot.paramMap.get('id');


  tip$ = this.tipService.getOneTip(this.userId, this.tipId)
    .subscribe((tip) => {
      this.postForm.setValue({
        tipTitle: tip.tipTitle,
        authorName: tip.authorName,
        imageUrl: tip.imageUrl,
        tipContent: tip.tipContent,
      });
    })

  
  constructor(
    private tipService: TipService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onUpdateTip(): void {
    
    this.showUpdatePost = true;
    const tipDetails = this.postForm.value;
  
    this.tipService.editTip(tipDetails, this.userId, this.tipId);
    this.showUpdatePost = false;
    this.router.navigate([`traveltips/${this.userId}/${this.tipId}`]);
  };

  ngOnInit(): void {
    
  }

}
