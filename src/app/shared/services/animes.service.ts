import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {
  constructor(private http: HttpClient) {}

  getAnimes(filter = "trending/anime?limit=6") {
    return this.http.get("https://kitsu.io/api/edge/" + filter)
  }

  // getAnime() {}

  // postAnime() {}
  // putAnime() {}
}
