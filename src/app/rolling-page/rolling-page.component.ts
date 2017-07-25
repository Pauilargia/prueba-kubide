import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rolling-page',
  templateUrl: './rolling-page.component.html',
  styleUrls: ['./rolling-page.component.css']
})
export class RollingPageComponent implements OnInit {

  url: any;
  video: any = {id: 'O4irXQhgMqg'};
  baseUrl: string = 'https://www.youtube.com/embed/';
  image: string = 'https://s-media-cache-ak0.pinimg.com/originals/f3/e0/f6/f3e0f67ced00806ea5ab6bb55f6162c0.jpg';

  constructor(private sanitizer: DomSanitizer, private router: Router) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);
  }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['/']);
  }

}
