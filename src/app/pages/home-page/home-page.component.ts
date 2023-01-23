import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimeInterface } from 'src/app/shared/models/Anime.interface';
import { AnimesService } from 'src/app/shared/services/animes.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {

  animes?: AnimeInterface[];
  constructor(private animesService: AnimesService) {}

  ngOnInit() {
    console.log('Me creo');

    this.animesService.getAnimes().subscribe((res: any) => {
      this.animes = res.data.map((anime:any) => ({attributes: {...anime.attributes, averageRating: Number(anime.attributes.averageRating) / 10}}));
      console.log(this.animes)
    });
  }

  ngOnDestroy() {
    console.log('Me destruyo');
  }
}
