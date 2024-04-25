import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Notification {
  title: string;
  nickname: string;
  timestamp: string;
  avatarUrl?: string;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  notifications: Notification[] = []; // Array to store notifications

  constructor(private router: Router) { }

  // You can fetch notifications from backend in ngOnInit()

  goToUserPage(): void {
    // Logic to navigate to user page
    this.router.navigateByUrl('/profile');
  }

  goToFriendsPage(): void {
    // Logic to navigate to friends page
    this.router.navigateByUrl('/friends');
  }

  goToNewsPage(): void {
    // Logic to navigate to news page (current page)
    this.router.navigateByUrl('/news');
  }

  goToPhotosPage(): void {
    // Logic to navigate to photos page
    this.router.navigateByUrl('/photos');
  }
}
