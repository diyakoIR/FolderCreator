import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      CommonModule ,
      RouterModule
    ],
  })
  export class AppModule {}