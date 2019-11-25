import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'ng2-data-table';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { MaterialModule } from './modules/shared/material/material.module';
import { HomeComponent } from './modules/home/home.component';
import { RegisterComponent } from './modules/register/register.component';
import { LoginComponent } from './modules/login/login.component';
import { UsersListComponent } from './modules/users-list/users-list.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UsersListComponent,
    AboutComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpModule,
    HttpClientModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MaterialModule]

})
export class AppModule { }
