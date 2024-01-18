import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnboardapiService {

  private apiUrl = environment
  constructor(private http: HttpClient) {}

  getTestMessage(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/test`);
  }
}
