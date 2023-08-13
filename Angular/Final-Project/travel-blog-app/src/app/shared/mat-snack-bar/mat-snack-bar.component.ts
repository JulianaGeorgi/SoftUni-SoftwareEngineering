import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mat-snack-bar',
  templateUrl: './mat-snack-bar.component.html',
  styleUrls: ['./mat-snack-bar.component.css']
})
export class MatSnackBarComponent {

  constructor(public snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {

    this.snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      // panelClass: [className],
    });

  }
}
