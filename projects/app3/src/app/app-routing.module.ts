import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View1Component } from './pages/view1.component';
import { View2Component } from './pages/view2.component';


const routes: Routes = [
  {
    path: 'app3', children: [
      { path: '', redirectTo: 'view1', pathMatch: 'full' },
      { path: 'view1', component: View1Component },
      { path: 'view2', component: View2Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
