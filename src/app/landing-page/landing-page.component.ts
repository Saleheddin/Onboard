import { Component } from '@angular/core';
import { OnboardapiService } from '../onboardapi.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  testMessage: any;
  constructor(private api : OnboardapiService){}

  ngOnInit(): void {
    this.api.getTestMessage().subscribe((data) => {
      this.testMessage = data.message;
    });
  }

}
