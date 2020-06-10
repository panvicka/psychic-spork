import { SignupFormComponent } from './SIGNUP~1/signup-form.component';
import { ParameterService } from './parameters.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParameterComponent } from './parameter/parameter.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    ParameterComponent,
    FavoriteComponent,
    ZippyComponent,
    ContactFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [
    ParameterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
