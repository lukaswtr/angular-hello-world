import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {GidcRootModule} from '@gidc/pali/root-module';
import { GidcHeaderModule } from '@gidc/pali/header';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
        // PaLi default options
        GidcRootModule,
        //KN customised header
        GidcHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
