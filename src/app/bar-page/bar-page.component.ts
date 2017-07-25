import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-page',
  templateUrl: './bar-page.component.html',
  styleUrls: ['./bar-page.component.css']
})
export class BarPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['/']);
  }

}
