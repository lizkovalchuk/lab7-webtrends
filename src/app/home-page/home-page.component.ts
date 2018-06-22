import { Component, OnInit } from '@angular/core';
import { Lab7Service } from '../lab7.service';
import { Planet } from '../planet';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  planets: Planet[];

  //create an instance of the API.
  //access it with getLab() method in Lab7Service

  constructor(
    private lab7service: Lab7Service 
  ) { }

  ngOnInit() {
    this.lab7service.getPlanets().subscribe(data => this.planets = data);
  }

}


