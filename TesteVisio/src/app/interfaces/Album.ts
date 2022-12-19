import { Artist } from './Artist';

export interface Album {
  id: number;
  title: string;
  link: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  record_type: string;
  explicit_lyrics: boolean;
  position: number;
  artist: Artist;
}
