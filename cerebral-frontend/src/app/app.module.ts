import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HttpService } from "./http/http.service";
import { AuthenticationService } from "./authentication/authentication.service";
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';

//form  
import { FormsModule } from '@angular/forms';

//  components
import { PortalComponent } from './portal/portal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
