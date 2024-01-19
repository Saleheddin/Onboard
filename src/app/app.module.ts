import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RouterModule } from '@angular/router';
import { OnboardapiService } from './onboardapi.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: LoginpageComponent},
      {path: 'test', component: LandingPageComponent},
    ]),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    OnboardapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
