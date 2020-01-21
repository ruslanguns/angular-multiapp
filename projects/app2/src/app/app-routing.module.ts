import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View1Component } from './pages/view1.component';
import { View2Component } from './pages/view2.component';


const routes: Routes = [
  { path: '', redirectTo: 'app2', pathMatch: 'full' },
  {
    path: 'app2', children: [
      { path: '', redirectTo: 'view1', pathMatch: 'full' },
      { path: 'view1', component: View1Component },
      { path: 'view2', component: View2Component },
    ]
  },
  { path: '*', redirectTo: 'app2', pathMatch: 'full' } // FIXME: Esta parte aún no funciona!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
