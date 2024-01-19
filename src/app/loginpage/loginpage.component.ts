import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  username: any;
  password: any;

  constructor(private router: Router){}

  OnKeyUsername( event: any){
    this.username = event.target.value;
  }

  OnKeyPassword( event: any){
    this.password = event.target.value;
  }

  connect(){
    if(this.password==="123456" && this.username==="seelfdali@gmail.com"){
      this.router.navigate(['/test']);
    }else{
      console.log("invalid username or password");
    }
  }
}
