import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  private baseUrl = 'backend-url'; // Replace 'backend-url' with your actual backend base URL

  constructor(private http: HttpClient) { }

  acceptFriendRequest(request: any): Observable<any> {
    const url = `${this.baseUrl}/accept-friend-request`;
    return this.http.post(url, request);
  }

  rejectFriendRequest(request: any): Observable<any> {
    const url = `${this.baseUrl}/reject-friend-request`;
    return this.http.post(url, request);
  }

  deleteFriend(friend: any): Observable<any> {
    const url = `${this.baseUrl}/delete-friend`;
    return this.http.post(url, friend);
  }

  sendFriendProposal(proposal: any): Observable<any> {
    const url = `${this.baseUrl}/send-friend-proposal`;
    return this.http.post(url, proposal);
  }
}
