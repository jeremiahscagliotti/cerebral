import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// import { PortalComponent } from './portal/portal.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { SignUpComponent } from './sign-up/sign-up.component';
// import { LoginComponent } from './login/login.component';
// import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  //{ path: 'profile/:id', component: ProfileComponent },
  //{ path: 'registration', component: SignUpComponent }
  //{ path: '', pathMatch: 'full', redirectTo: 'registration' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
