import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImportNicknameService {

  constructor(private http: HttpClient) { }

  saveNickname(nickname: string): Promise<any> {
    // You can modify the URL according to your backend API endpoint
    const url = 'backend-url/nickname';
    return this.http.post(url, { nickname }).toPromise();
  }
}
