//@ts-nocheck
import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/interfaces/Track';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favorites: Track[] = [];
  index: string = '';

  constructor() {
    this.setFavorites();
    console.log(this.favorites);
  }

  ngOnInit(): void {}

  getFavorite(i) {
    let index = i.toString();
    let item = localStorage.getItem(index);

    return JSON.parse(item);
  }

  setFavorites() {
    for (let i = 0; i < localStorage.length; i++) {
      let item = this.getFavorite(i);
      this.favorites.push(item);
    }
  }
}
