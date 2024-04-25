import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Photo {
  imageUrl: string;
  link: string;
}

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  photos: Photo[] = [
    { imageUrl: 'https://img.goodfon.com/original/2880x1800/3/ac/dikaia-koshka-liubopytnaia-mordochka-vzgliad.jpg', link: '#' },
    { imageUrl: 'https://w.forfun.com/fetch/ae/ae82a6bd873b3ce5f9165543b8e3ac97.jpeg', link: '#' },
    { imageUrl: 'https://avatars.mds.yandex.net/i?id=22136a7a92569e478ac37c0bfd9895601769003f-11549492-images-thumbs&n=13', link: '#' },
    // Add more photo URLs as needed
  ];

  constructor(private router: Router) { }

  goToUserPage(): void {
    this.router.navigateByUrl('/profile');
  }

  goToFriendsPage(): void {
    this.router.navigateByUrl('/friends');
  }

  goToNotificationsPage(): void {
    this.router.navigateByUrl('/notifications');
  }

  goToNewsPage(): void {
    this.router.navigateByUrl('/news');
  }
}
