import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Track } from '../interfaces/Track';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private apiUrl = `https://deezerdevs-deezer.p.rapidapi.com/track/`;

  constructor(private http: HttpClient) {}

  getTrack(id: number | string | null): Observable<Track> {
    return this.http.get<Track>(this.apiUrl + id, {
      headers: {
        'X-RapidAPI-Key': 'b86abce067msh756ff58c7f4341bp1278dejsnae83d1cc659a',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      },
    });
  }
}
