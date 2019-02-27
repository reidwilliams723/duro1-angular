import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationPageComponent } from './modules/configuration/pages/configuration/configuration-page/configuration-page.component';
import { StatusPageComponent } from './modules/status/pages/status/status-page/status-page.component';
import { MonitorPageComponent } from './modules/monitor/pages/monitor/monitor-page/monitor-page.component';
import { HomeComponent } from './modules/home/pages/home/home-page.component';

const routes: Routes = [
  {path: '',
   redirectTo: '/home',
   pathMatch: 'full'
  },
  {path: 'home', component: HomeComponent},
  {path: 'configuration', component: ConfigurationPageComponent},
  {path: 'status', component: StatusPageComponent},
  {path: 'monitor', component: MonitorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
