import { Component, OnInit } from '@angular/core';
import { ResponseApi } from 'src/app/interfaces/ResponseApi';

import { Track } from 'src/app/interfaces/Track';
import { TopTracksService } from 'src/app/services/top-tracks.service';

@Component({
  selector: 'app-track-cards',
  templateUrl: './track-cards.component.html',
  styleUrls: ['./track-cards.component.css'],
})
export class TrackCardsComponent implements OnInit {
  responses!: ResponseApi;
  musicas!: Track[];
  indexPag: number = 0;
  pagina: number = 1;
  search: any = 'Undefined';
  campoBusca!: any;

  constructor(private topTracksService: TopTracksService) {
    //this.getTracks(this.search, 0);
    this.getTops();
  }

  ngOnInit(): void {}

  getTracks(search: string, index: number): void {
    this.topTracksService.getTracks(search, index).subscribe((responses) => {
      this.responses = responses;
      this.musicas = this.responses.data;
      if (this.musicas.length == 0) {
        this.pagina = 1;
        this.getTracks(this.search, 0);
      }

      // console.log(this.musicas);
    });
  }
  getTops(): void {
    this.topTracksService.getTop().subscribe((responses) => {
      this.responses = responses;
      this.musicas = this.responses.tracks.data;
      console.log(this.musicas);
    });
  }

  public searchBar(): void {
    this.search = this.campoBusca;
    this.getTracks(this.search, this.indexPag);
    this.pagina = 1;
  }

  public fowardBtn(): void {
    if (this.musicas.length !== 0) {
      this.indexPag += 25;
      this.getTracks(this.search, this.indexPag);
      this.pagina += 1;
    }
  }

  public backBtn(): void {
    if (this.indexPag !== 0) {
      this.indexPag -= 25;
      this.getTracks(this.search, this.indexPag);
      this.pagina -= 1;
    }
  }

  public addFavorite(objeto: {}): void {
    localStorage.setItem(
      localStorage.length.toString(),
      JSON.stringify(objeto)
    );
  }
}
