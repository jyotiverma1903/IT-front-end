import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { RegisterComponent } from './user/register/register.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PersonalDashboardComponent } from './dashboard/personal-dashboard/personal-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider} from 'angular-6-social-login'

  export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig(
        [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider("153124374804-ofqennf96ise0ank2g2hv77a8qne166p.apps.googleusercontent.com")
          }
        ]
    );
    return config;
  }
  
 
@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    UserModule,
    DashboardModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path:'home',component :RegisterComponent },
      {path:'error',component :ErrorPageComponent },
      {path :'dashboard',component:PersonalDashboardComponent},
      {path :'',redirectTo: 'home',pathMatch:'full'},
      {path :'**',component:NotFoundComponent}
    ])
  ],
  providers: [HttpService,CookieService,{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
