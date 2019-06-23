import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ErrorsModule } from './errors/errors.module';
import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    PhotosModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
