import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImportNicknameService } from '../services/import-nickname.service'; // Import the service

@Component({
  selector: 'app-import-nickname',
  templateUrl: './import-nickname.component.html',
  styleUrls: ['./import-nickname.component.css']
})
export class ImportNicknameComponent {
  nickname: string = '';

  constructor(
    private router: Router,
    private importNicknameService: ImportNicknameService // Inject the service
  ) {}

  saveNickname(): void {
    this.importNicknameService.saveNickname(this.nickname)
      .then(() => {
        // After saving the nickname, navigate to the user's profile page
        this.router.navigateByUrl('/profile');
      })
      .catch((error) => {
        console.error('Error saving nickname:', error);
        // Handle error here
      });
  }
}
