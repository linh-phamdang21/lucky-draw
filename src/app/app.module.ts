import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WheelComponent } from './wheel/wheel.component';
import { OptionsComponent } from './options/options.component';
import { ClipTextComponent } from './clip-text/clip-text.component';
import { HomeComponent } from './home/home.component';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    WheelComponent,
    OptionsComponent,
    ClipTextComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
