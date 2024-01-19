import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnboardapiService {

  private apiEnv = environment
  constructor(private http: HttpClient) {}

  getTestMessage(): Observable<any> {
    return this.http.get<any>(`${this.apiEnv.apiUrl}`);
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiEnv.apiUrl}/users`);
  }
}
