import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent} from './components/search/search.component';
import { AssetsComponent } from './pages/assets/assets.component';
import { AssetsHighComponent } from './components/assets-high/assets-high.component';
import { AssetsLowComponent } from './components/assets-low/assets-low.component';
import { AssetsEventsComponent } from './components/assets-events/assets-events.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    AssetsComponent,
    AssetsHighComponent,
    AssetsLowComponent,
    AssetsEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
