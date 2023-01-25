import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/shared/components/loading/services/loading.service';
import { AnimesService } from 'src/app/shared/services/animes.service';

@Component({
  selector: 'app-animes-page',
  templateUrl: './animes-page.component.html',
  styleUrls: ['./animes-page.component.scss'],
})
export class AnimesPageComponent implements OnInit, OnDestroy {

  years: number[] = defaultYears;
  searchText: string = "";
  animes: any;

  animesSubscription:any;

  constructor(private loadingService: LoadingService, private animesService: AnimesService) { }
  ngOnInit() {
    this.search(null, defaultYears);
  }

  search(text: string | null, years: number[]) {
    // PASO 3 - Poner isLoading a true para mostrar el loading
    this.loadingService.next(true);
    this.animesSubscription = this.animesService.getAnimes(`anime?page%5Boffset%5D=0&page%5Blimit%5D=20${text ? "&filter%5Btext%5D=" + text : ""}&sort=-user_count&filter%5Byear%5D=${years[0]}..${years[1]}`).subscribe((res: any) => {
      console.log(res.data)
      this.animes = res.data;
      // PASO 4 - Poner isLoading a false para ocultar el loading
      this.loadingService.next(false);
    });
  }

  ngOnDestroy(){
    this.animesSubscription.unsubscribe();
  }
}
const defaultYears = [1907, 2023]
