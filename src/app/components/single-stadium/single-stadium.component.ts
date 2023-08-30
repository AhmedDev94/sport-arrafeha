import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stadiumsTab } from 'src/app/data folder/data';

@Component({
  selector: 'app-single-stadium',
  templateUrl: './single-stadium.component.html',
  styleUrls: ['./single-stadium.component.css']
})
export class SingleStadiumComponent implements OnInit {
  stadiums = stadiumsTab;
  
  findedStadium : any ;
  id: any;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() { 
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
  for (let i = 0; i < this.stadiums.length; i++) {
    if (this.stadiums[i].id == this.id) {
      this.findedStadium = this.stadiums[i]
      break;
    }

  }
  
  }

}
