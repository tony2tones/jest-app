import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common//http';

import { AppComponent } from './app.component';
import { JestTestComponent } from './jest-test/jest-test.component';
import { MockService } from './services/mock-service.service';

@NgModule({
  declarations: [
    AppComponent,
    JestTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
