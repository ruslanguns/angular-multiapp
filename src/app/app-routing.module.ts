import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleComponent } from './pages/simple/simple.component';
import { App1SharedModule } from 'projects/app1/src/app/app.module';
import { App2SharedModule } from 'projects/app2/src/app/app.module';
import { App3SharedModule } from 'projects/app3/src/app/app.module';


const routes: Routes = [
  { path: '', redirectTo: 'core', pathMatch: 'full' },
  { path: 'core', component: SimpleComponent, pathMatch: 'full' }, // FIXME: Not initializing with this route, instead is going to /app1
  {
    path: 'app1',
    loadChildren: () => import('projects/app1/src/app/app.module').then(m => m.App1SharedModule),
  },
  {
    path: 'app2',
    loadChildren: () => import('projects/app2/src/app/app.module').then(m => m.App2SharedModule),
  },
  {
    path: 'app3',
    loadChildren: () => import('projects/app3/src/app/app.module').then(m => m.App3SharedModule),
  },
  { path: '**', redirectTo: 'core', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true}),
    App1SharedModule.forRoot(),
    App2SharedModule.forRoot(),
    App3SharedModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
