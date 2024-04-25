import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private baseUrl = 'backend-url'; // Replace 'backend-url' with your actual backend base URL

  constructor(private http: HttpClient) { }

  getNotifications(): Observable<any> {
    const url = `${this.baseUrl}/notifications`;
    return this.http.get(url);
  }

  // You can add more methods for managing notifications, such as marking as read, deleting, etc.
}
