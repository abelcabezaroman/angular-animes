import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AnimesPageComponent } from './pages/animes-page/animes-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LoadingComponent } from './shared/components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AnimesPageComponent,
    HeaderComponent,
    GalleryComponent,
    ContactPageComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RatingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
