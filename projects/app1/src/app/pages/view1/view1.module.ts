import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { View1RoutingModule } from './view1-routing.module';
import { View1Component } from './view1.component';
import { NavbarModule } from '../../components/navbar/navbar.module';


@NgModule({
  declarations: [View1Component],
  imports: [
    CommonModule,
    NavbarModule,
    View1RoutingModule
  ]
})
export class View1Module { }
