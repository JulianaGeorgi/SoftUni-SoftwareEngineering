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
import { HttpClientModule} from '@angular/common/http';
import { TipComponent } from './travel-tip/tip/tip.component';

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
    TravelTipModule, 
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
