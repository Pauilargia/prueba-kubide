import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-beatles-page',
  templateUrl: './beatles-page.component.html',
  styleUrls: ['./beatles-page.component.css']
})
export class BeatlesPageComponent implements OnInit {

  url: any;
  video: any = {id: 'VJDJs9dumZI'};
  baseUrl: string = 'https://www.youtube.com/embed/';
  image: string = 'http://www.thebeatles.com/sites/default/files/styles/tile_3_column/public/sticky/logo.jpg?itok=MQmoKorx';

  constructor(private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);
  }

  ngOnInit() {
  }

}
