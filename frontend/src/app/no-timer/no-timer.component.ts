import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-timer',
  templateUrl: './no-timer.component.html',
  styles: [
  ]
})
export class NoTimerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate(['create-timer']);
  }
}
