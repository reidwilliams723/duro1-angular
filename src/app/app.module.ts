import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './modules/home/pages/home/home-page.component';
import { ConfigurationPageComponent } from './modules/configuration/pages/configuration/configuration-page/configuration-page.component';
import { StatusPageComponent } from './modules/status/pages/status/status-page/status-page.component';
import { MonitorPageComponent } from './modules/monitor/pages/monitor/monitor-page/monitor-page.component';
import { DragDropModule } from '@angular/cdk/drag-drop'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigurationPageComponent,
    StatusPageComponent,
    MonitorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
