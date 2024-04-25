import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  // Method to fetch comments from the backend
  getComments(): Observable<Comment[]> {
    // Replace 'backend-url/comments' with the actual endpoint to fetch comments
    const url = 'backend-url/comments';
    return this.http.get<Comment[]>(url);
  }

  // Method to add a new comment to the backend
  addComment(comment: Comment): Observable<any> {
    // Replace 'backend-url/comments' with the actual endpoint to add a comment
    const url = 'backend-url/comments';
    return this.http.post(url, comment);
  }
}
