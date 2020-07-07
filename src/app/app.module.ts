import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetflixComponent } from './component/netflix/netflix.component';
import { SliderComponent } from './component/slider/slider.component';
import { NetflixsliderComponent } from './component/netflixslider/netflixslider.component';
import { MixsliderComponent } from './component/mixslider/mixslider.component';

@NgModule({
  declarations: [
    AppComponent,
    NetflixComponent,
    SliderComponent,
    NetflixsliderComponent,
    MixsliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
