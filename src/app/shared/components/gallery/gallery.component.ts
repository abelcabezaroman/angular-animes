import { Component, Input } from '@angular/core';
import { AnimeInterface } from '../../models/Anime.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Input() list?:AnimeInterface[];

}
