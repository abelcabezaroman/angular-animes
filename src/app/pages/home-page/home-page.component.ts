import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimeInterface } from 'src/app/shared/models/Anime.interface';
import { AnimesService } from 'src/app/shared/services/animes.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  animes :any= {};
  constructor(private animesService: AnimesService) {}

  ngOnInit() {
    console.log('Me creo');
    this.getAnimes('trending/anime?limit=6', 'animesTrending');
    this.getAnimes(
      'anime?filter%5Bstatus%5D=current&page%5Blimit%5D=6&sort=-user_count',
      'animesPopEm'
    );
    this.getAnimes(
      'anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=6&sort=-user_count',
      'animesMostWanted'
    );
    this.getAnimes('anime?page%5Blimit%5D=6&sort=-average_rating', 'animesAvg');
    this.getAnimes('anime?page%5Blimit%5D=6&sort=-user_count', 'animesPop');
  }

  getAnimes(filter: string, animesVarKey: any) {
    this.animesService.getAnimes(filter).subscribe((res: any) => {
      this.animes[animesVarKey] = res.data.map((anime: any) => ({
        attributes: {
          ...anime.attributes,
          averageRating: Number(anime.attributes.averageRating) / 10,
        },
      }));
    });
  }

  ngOnDestroy() {
    console.log('Me destruyo');
  }
}
