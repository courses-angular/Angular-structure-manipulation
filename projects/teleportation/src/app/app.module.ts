import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header.component';
import { SidebarComponent } from './layout/sidebar.component';
import { FooterComponent } from './layout/footer.component';
import { HomeComponent } from './pages/home.component';
import { ProjectsComponent } from './pages/projects.component';
import {ProfileComponent} from './pages/profile.component';
import { TargetDirective } from './portal/target.directive';
import { AttachToDirective } from './portal/attach-to.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    ProfileComponent,
    TargetDirective,
    AttachToDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
