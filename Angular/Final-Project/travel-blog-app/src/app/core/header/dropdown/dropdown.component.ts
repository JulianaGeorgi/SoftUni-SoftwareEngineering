import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  options: string[] = ['Travel Tips', 'Newest', 'Add Tip'];
  selectedOption: string | null = null;
  isDropdownOpen = false;

  constructor(private router: Router) { }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  navigateToPage(option: string) {
    this.isDropdownOpen = false;

    // Determine the route based on the selected option
    let route: string;
    if (option === 'Travel Tips') {
      route = '/traveltips';
    } else if (option === 'Newest') {
      route = '/newest';
    } else if (option === 'Add Tip') {
      route = '/newtip';
    } else {
      route = '';
    }
    // Navigate to the specified route
    this.router.navigate([route]);
  }
}
