import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/interfaces/Track';
import { TrackService } from 'src/app/services/track.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  trackDetails?: Track;
  trackId = this.route.snapshot.paramMap.get('id');
  track!: Track;

  constructor(
    private trackService: TrackService,
    private route: ActivatedRoute
  ) {
    this.getTrack(this.trackId);
  }

  pipeMinutes(duration: number) {
    let time = duration;
    let minutes = 0;
    for (; time > 60; time -= 60) {
      minutes += 1;
    }
    return `${minutes}:${time}  `;
  }

  pipeData(data: string) {
    let americanDate = data;
    let brazilianDate = americanDate.split('-').reverse().join('/');
    return brazilianDate;
  }

  ngOnInit(): void {}
  getTrack(id: string | null | number): void {
    this.trackService.getTrack(id).subscribe((track) => {
      this.trackDetails = track;
      this.track = this.trackDetails;

      console.log(this.trackDetails);
    });
  }
}
