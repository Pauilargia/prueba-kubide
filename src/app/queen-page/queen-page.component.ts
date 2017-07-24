import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-queen-page',
  templateUrl: './queen-page.component.html',
  styleUrls: ['./queen-page.component.css']
})
export class QueenPageComponent implements OnInit {

  url: any;
  video: any = {id: 'zO6D_BAuYCI'};
  baseUrl: string = 'https://www.youtube.com/embed/';
  image: string = 'http://www.eboca.com/ebocame/wp-content/uploads/2014/11/queen-band-i14-1024x605.jpg';

  constructor(private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);
  }


  ngOnInit() {
  }

}
