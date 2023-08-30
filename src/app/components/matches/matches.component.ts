import { Component, OnInit } from '@angular/core';
import { T } from 'src/app/data folder/data';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
 matches = T ;


  constructor() { }

  ngOnInit() {
  }

}
