import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  options: string[] = ['All Tips', 'Newest', 'Add Tip'];
  selectedOption: string | null = null;
  isDropdownOpen = false;
  closeTimeout: any;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  navigateToPage(option: string) {
    this.isDropdownOpen = false;

    // Determine the route based on the selected option
    let route: string;
    if (option === 'All Tips') {
      route = '/traveltips/all';
    } else if (option === 'Newest') {
      route = '/traveltips/all/newest';
    } else if (option === 'Add Tip') {
      route = '/traveltips/submitTip';
    } else {
      route = '';
    }
    // Navigate to the specified route
    this.router.navigate([route]);
  }

  cancelCloseDropdown() {
    clearTimeout(this.closeTimeout);
  }

  closeDropdown() {
    this.closeTimeout = setTimeout(() => {
      this.isDropdownOpen = false;
    }, 200)
  }
}
