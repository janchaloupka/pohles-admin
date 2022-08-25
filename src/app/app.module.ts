import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LoginComponent } from './auth/login/login.component';
import { ComponentsModule } from './components/components.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ActionBarCustomersComponent } from './components/customers/action-bar-customers/action-bar-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CustomersComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    ToastrModule.forRoot(),
    OAuthModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
