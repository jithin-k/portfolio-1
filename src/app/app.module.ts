import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoBarComponent } from './info-bar/info-bar.component';
import { ContentComponent } from './content/content.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';
import { ProjectComponent } from './project/project.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { ConnectMeComponent } from './connect-me/connect-me.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoBarComponent,
    ContentComponent,
    MenuBarComponent,
    ContactComponent,
    HistoryComponent,
    ProjectComponent,
    MyServicesComponent,
    ConnectMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
