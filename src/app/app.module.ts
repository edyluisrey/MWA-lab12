import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnorderedListComponent } from './unordered-list/unordered-list.component';
import { UpperDirective } from './upper.directive';
import { MyvisibilityDirective } from './myvisibility.directive';
import { MycolorDirective } from './mycolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    UnorderedListComponent,
    UpperDirective,
    MyvisibilityDirective,
    MycolorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
