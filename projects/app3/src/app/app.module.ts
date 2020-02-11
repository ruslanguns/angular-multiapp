import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';

// List of providers
const providers = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class App3Module { }

@NgModule({})
export class App3SharedModule {
  static forRoot(): ModuleWithProviders<App3Module> {
    return {
      ngModule: App3Module,
      providers
    };
  }
}
