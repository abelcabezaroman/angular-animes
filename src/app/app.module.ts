import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SliderModule} from 'primeng/slider';

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
import { CustomNamePipe } from './shared/pipes/custom-name.pipe';
import { BtnComponent } from './shared/components/btn/btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AnimesPageComponent,
    HeaderComponent,
    GalleryComponent,
    ContactPageComponent,
    LoadingComponent,
    CustomNamePipe,
    BtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RatingModule,
    SliderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
