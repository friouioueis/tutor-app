import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    const video: HTMLVideoElement | null = document.getElementById('homeVideo') as HTMLVideoElement;

    if (video) {
      video.play().catch(error => {
        console.error('Error attempting to play the video:', error);
      });
    }

    const homeComponent = document.querySelector('.home-component');

    if (homeComponent && video) {
      homeComponent.addEventListener('mouseenter', () => {
        video.play();
      });

      homeComponent.addEventListener('mouseleave', () => {
        video.pause();
      });
    }
  }
}
