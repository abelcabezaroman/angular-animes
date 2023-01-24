import { Component, OnInit } from '@angular/core';
import { AnimesService } from 'src/app/shared/services/animes.service';

@Component({
  selector: 'app-animes-page',
  templateUrl: './animes-page.component.html',
  styleUrls: ['./animes-page.component.scss'],
})
export class AnimesPageComponent implements OnInit {

  searchText: string = "";
  animes:any;
  constructor(private animesService: AnimesService) {}
  ngOnInit() {
   this.search(null);
  }

  search(text: string| null){
    this.animesService.getAnimes(`anime?page%5Boffset%5D=0&page%5Blimit%5D=20${text ? "&filter%5Btext%5D=" + text : ""}&sort=-user_count`).subscribe((res:any) => {
      console.log(res.data)
      this.animes = res.data;
    });
  }
}
