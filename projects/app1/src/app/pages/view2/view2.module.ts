import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { View2RoutingModule } from './view2-routing.module';
import { View2Component } from './view2.component';
import { NavbarModule } from '../../components/navbar/navbar.module';


@NgModule({
  declarations: [View2Component],
  imports: [
    CommonModule,
    NavbarModule,
    View2RoutingModule
  ]
})
export class View2Module { }
