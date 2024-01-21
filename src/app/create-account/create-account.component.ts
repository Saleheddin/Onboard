import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  email: any;
  username: any;
  password: any;
  major:any;
  year: any;

  constructor(private authService: AuthService, private router: Router){}

  signup(){
    const user = {email:this.email,username:this.username,password:this.password,major:this.major,year:this.year};
    console.log("sign up : ",user);
    this.authService.regiter(user).subscribe({
      next:(res)=>{
        console.log(res.message);
        /**
         * when registered should create new user on the user collection 
         * and then redirect to user landing page 
         * */
        this.router.navigate(['/test'])
      },
      error:(err)=>{
        console.error("failed to register",err.message);;
      }
    })
  }

}
