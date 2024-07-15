
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SlideshowComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Required for ngModel
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
