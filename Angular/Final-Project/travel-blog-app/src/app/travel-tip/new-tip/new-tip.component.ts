import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-tip',
  templateUrl: './new-tip.component.html',
  styleUrls: ['./new-tip.component.css']
})
export class NewTipComponent {

  newTipSubmitHandler(form: NgForm) :void {
    if(form.invalid){
      return;
    }
    console.log(form.value);
  }
}
