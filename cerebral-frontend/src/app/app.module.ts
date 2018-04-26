import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HttpService } from "./http/http.service";
import { AuthenticationService } from "./authentication/authentication.service";
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
