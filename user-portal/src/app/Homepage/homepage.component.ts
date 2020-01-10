import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-root',
  templateUrl: './homepage.component.html'
})

export class HomePageComponent implements OnInit{
  constructor(private router:Router){

  }
  ngOnInit(): void {
  }
  title = 'angular';
}
