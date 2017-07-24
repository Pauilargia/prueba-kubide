import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-rolling-page',
  templateUrl: './rolling-page.component.html',
  styleUrls: ['./rolling-page.component.css']
})
export class RollingPageComponent implements OnInit {

  url: any;
  video: any = {id: 'O4irXQhgMqg'};
  baseUrl: string = 'https://www.youtube.com/embed/';

  constructor(private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);
  }

  ngOnInit() {
  }

}
