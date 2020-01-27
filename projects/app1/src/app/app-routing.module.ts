import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View1Component } from './pages/view1.component';
import { View2Component } from './pages/view2.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: 'app1',
    component: AppComponent,
    children: [
      { path: 'view1', component: View1Component },
      { path: 'view2', component: View2Component },
      { path: '**', redirectTo: 'view1', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
