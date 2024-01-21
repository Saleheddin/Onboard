import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  username: any;
  password: any;

  constructor(private router: Router, private authService: AuthService) { }
  
  handleUpdateResponse(response: any) {
    this.authService.saveToken(response.token);
    // Redirect to landing page
    this.router.navigate(['/test'])
  }

  handelErrorLogin(error: any) {
    console.error('Login failed', error);
  }

  connect() {
    this.authService.login({ username: 'example', password: 'password' }).subscribe({
      next: (response) => {
        // Handle successful response
        console.log('Login successful', response);
        this.handleUpdateResponse(response);
      },
      error: (error) => {
        // Handle error
        this.handelErrorLogin(error);
      },
      complete: () => {
        // This block is optional and runs when the observable is complete
        console.log('Login process completed');
      }
    });
  }
}
