import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: 'app3', component: AppComponent, children: [
      {
        path: 'view1',
        loadChildren: () => import('projects/app3/src/app/pages/view1/view1.module').then(m => m.View1Module),
      },
      {
        path: 'view2',
        loadChildren: () => import('projects/app3/src/app/pages/view2/view2.module').then(m => m.View2Module),
      },
      { path: '**', redirectTo: 'view1', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
