import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { View2RoutingModule } from './view2-routing.module';
import { View2Component } from './view2.component';
import { NavModule } from '@app1-comp/navbar/nav.module';


@NgModule({
  declarations: [View2Component],
  imports: [
    CommonModule,
    NavModule,
    View2RoutingModule
  ]
})
export class View2Module { }
