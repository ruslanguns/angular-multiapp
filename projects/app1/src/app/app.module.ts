import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav.component';
import { View1Component } from './pages/view1.component';
import { View2Component } from './pages/view2.component';

// List of providers
const providers = [];

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class App1Module { }

@NgModule({})
export class App1SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: App1Module,
      providers
    };
  }
}
