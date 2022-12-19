import { Data } from '@angular/router';
import { Track } from './Track';

export type ResponseApi = {
  data: Track[];
  next: string;
  total: number;
  tracks: Track;
};
