import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl = 'http://example.com/api/profiles'; // Implement backend API URL here

  constructor(private http: HttpClient) { }

  // Get profile data by ID
  getProfileById(profileId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${profileId}`); // Implement backend API endpoint for fetching profile by ID
  }

  // Update profile data
  updateProfile(profileId: number, newData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${profileId}`, newData); // Implement backend API endpoint for updating profile
  }

  // Delete profile
  deleteProfile(profileId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${profileId}`); // Implement backend API endpoint for deleting profile
  }
}
