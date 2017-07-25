import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foo-page',
  templateUrl: './foo-page.component.html',
  styleUrls: ['./foo-page.component.css']
})
export class FooPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['/']);
  }

}
