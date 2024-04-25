import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  // Define profile data
  nickname_id: string = "JohnDoe";
  full_name: string = "John Doe";
  birth_date: string = "January 1, 2000";
  about: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  // Inject Router
  constructor(private router: Router) {}

  // Navigation methods
  goToNewsPage(): void {
    this.router.navigateByUrl('/news');
  }

  goToFriendsPage(): void {
    this.router.navigateByUrl('/friends');
  }

  goToNotificationsPage(): void {
    this.router.navigateByUrl('/notifications');
  }

  goToPhotosPage(): void {
    this.router.navigateByUrl('/photos');
  }

  // Profile operation methods
  editProfile(): void {
    // Implement logic for editing the profile
    console.log("Editing profile...");
  }

  saveProfile(): void {
    // Implement logic for saving the profile
    console.log("Saving profile...");
  }

  deleteAccount(): void {
    // Implement logic for deleting the account
    console.log("Deleting account...");
  }

  logout(): void {
    // Implement logic for logging out
    console.log("Logging out...");
    this.router.navigateByUrl('/login');
  }
}
