import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stadiumsTab } from 'src/app/data folder/data';

@Component({
  selector: 'app-stadiums-table',
  templateUrl: './stadiums-table.component.html',
  styleUrls: ['./stadiums-table.component.css']
})
export class StadiumsTableComponent implements OnInit {
 
  stadiums = stadiumsTab;
  constructor(private router : Router) { }
 

  ngOnInit() {
  }
  displayStadium(id:number){
    this.router.navigate([`stadium/${id}`]);
  }
updateStadium(){

}
deleteStadium(id:number){
  this.stadiums =  JSON.parse(localStorage.getItem("stadiums")||"[]");
  for (let i = 0; i < this.stadiums.length; i++) {
    if (this.stadiums[i].id== id) { 
      this.stadiums.splice(i , 1);
    }
  }
  localStorage.setItem("stadiums", JSON.stringify(this.stadiums));
}



}

