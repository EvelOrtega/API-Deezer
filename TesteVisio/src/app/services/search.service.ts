import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Track } from '../interfaces/Track';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public busca!: string;
  private apiUrl = `https://deezerdevs-deezer.p.rapidapi.com/track/%7Bid%7D/q=${this.busca}`;

  constructor(private http: HttpClient) {}

  getTracks(): Observable<Track[]> {
    return this.http.get<Track[]>(this.apiUrl, {
      headers: {
        'X-RapidAPI-Key': 'b86abce067msh756ff58c7f4341bp1278dejsnae83d1cc659a',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      },
    });
  }
}
