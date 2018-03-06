import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { ParagraphContentComponent } from './paragraph/paragraph-content/paragraph-content.component';


@NgModule({
  declarations: [
    AppComponent,
    ParagraphComponent,
    ParagraphContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
