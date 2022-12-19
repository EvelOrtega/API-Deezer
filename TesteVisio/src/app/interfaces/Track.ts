import { Album } from './Album';
import { Artist } from './Artist';

export interface Track {
  id: number | null | string;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  release_date: string;
  explicit_lyrics: boolean;
  preview: string;
  bpm: number;
  gain: number;
  position: number;
  artist: Artist;
  album: Album;
  data: [];
}
