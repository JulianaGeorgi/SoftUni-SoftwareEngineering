import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { TravelTipsComponent } from './travel-tips/travel-tips.component';
import { TravelTipModule } from './travel-tip/travel-tip.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TravelTipsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule, 
    UserModule, 
    TravelTipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
