import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lab7Service } from '../lab7.service';
import { Planet } from '../planet'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // Planets : Planet[] = [];
  Planet : Planet;

  num: number;

  getNum(): void {
    this.num = +this.route.snapshot.paramMap.get('id');
    console.log(this.num)
  }

  constructor(
    private route: ActivatedRoute,
   // private location: Location,
    private lab7Service: Lab7Service
  ) { }

  ngOnInit() {
    // this.getNum();
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id)

    //call the service 
    this.lab7Service.getPlanet(id).subscribe(data => {
      console.log(data)
        this.Planet = data
      }
    );
    
  }

}
