import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//Container - Pages
import { AppComponent } from './app.component';
import { AssetsComponent } from './pages/assets/assets.component';
import { HomeComponent } from './pages/home/home.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { SearchComponent} from './components/search/search.component';

import { AssetsHighComponent } from './components/assets-high/assets-high.component';
import { AssetsLowComponent } from './components/assets-low/assets-low.component';
import { AssetsEventsComponent } from './components/assets-events/assets-events.component';

// modules and interceptors
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
