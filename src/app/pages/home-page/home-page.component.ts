import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { LoadingService } from 'src/app/shared/components/loading/services/loading.service';
import { AnimesService } from 'src/app/shared/services/animes.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  animes: any = [];

  constructor(private loadingService: LoadingService, private animesService: AnimesService) { }

  ngOnInit() {
    console.log('Me creo');
    const subscriptions = [];
    subscriptions.push(this.getAnimes('trending/anime?limit=6'));
    subscriptions.push(this.getAnimes(
      'anime?filter%5Bstatus%5D=current&page%5Blimit%5D=6&sort=-user_count'
    ));
    subscriptions.push(this.getAnimes(
      'anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=6&sort=-user_count'
    ));
    subscriptions.push(this.getAnimes('anime?page%5Blimit%5D=6&sort=-average_rating'));
    subscriptions.push(this.getAnimes('anime?page%5Blimit%5D=6&sort=-user_count'));

    this.responseAllAnimes(subscriptions);
  }

  getAnimes(filter: string) {
    return this.animesService.getAnimes(filter)
  }

  responseAllAnimes(subscriptions: any) {
    this.loadingService.next(true);
    forkJoin(subscriptions).subscribe((resSubs: any) => {
      this.animes = []

      for (const resSub of resSubs) {
        this.animes.push(resSub.data.map((anime: any) => ({
          attributes: {
            ...anime.attributes,
            averageRating: Number(anime.attributes.averageRating) / 10,
          },
        })));
      }
      this.loadingService.next(false);

    });
  }

  ngOnDestroy() {
    console.log('Me destruyo');
  }
}
