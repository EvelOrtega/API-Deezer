import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseApi } from '../interfaces/ResponseApi';
@Injectable({
  providedIn: 'root',
})
export class TopTracksService {
  private topUrl =
    'https://deezerdevs-deezer.p.rapidapi.com/editorial/0/charts';
  private tracksUrl = `https://deezerdevs-deezer.p.rapidapi.com/search/track?q=`;

  constructor(private http: HttpClient) {}

  getTracks(search: string, index: number): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(
      this.tracksUrl + search + '&order=RANKING&index=' + index,
      {
        headers: {
          'X-RapidAPI-Key':
            'b86abce067msh756ff58c7f4341bp1278dejsnae83d1cc659a',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        },
      }
    );
  }
  getTop(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(this.topUrl, {
      headers: {
        'X-RapidAPI-Key': 'b86abce067msh756ff58c7f4341bp1278dejsnae83d1cc659a',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      },
    });
  }
}
