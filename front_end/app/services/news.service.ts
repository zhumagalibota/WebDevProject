import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = 'http://your-backend-api-url.com'; // Replace with your backend API base URL

  constructor(private http: HttpClient) { }

  // Method to fetch news feed data from the backend API
  getNewsFeed(): Observable<any> {
    // Replace the URL with the actual backend API endpoint
    return this.http.get(`${this.baseUrl}/news-feed`);
  }

  // Method to like a post by sending a request to the backend API
  likePost(postId: number): Observable<any> {
    // Replace the URL with the actual backend API endpoint
    return this.http.post(`${this.baseUrl}/like-post`, { postId });
  }
}
