import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiEnv = environment;
  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiEnv.apiUrl}/login`, credentials);
  }

  regiter(newUser: { email: string; username: string; password: string; major:string; year:number }): Observable<{ message: string }> {
    console.log("register service",newUser);
    return this.http.post<{ message: string }>(`${this.apiEnv.apiUrl}/register`, newUser);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
