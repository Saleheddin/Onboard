import { Component } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  username: any;
  password: any;

  OnKeyUsername( event: any){
    this.username = event.target.value;
    console.log("Username : " + this.username,"Password : " + this.password);
  }

  OnKeyPassword( event: any){
    this.password = event.target.value;
    console.log("Username : " + this.username,"Password : " + this.password);

  }
}
