import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigatePanelComponent } from './views/navigate-panel/navigate-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatePanelComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
