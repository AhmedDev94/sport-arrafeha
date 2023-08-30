import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  matches : any  ;
  id : any ;
  findedMatch : any ;
  

  constructor(private activatedRoute : ActivatedRoute ,
              private matchService : MatchService) { }

  ngOnInit() {
    // GET ID FROM PATH
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.matchService.getMatchById(this.id).subscribe((data)=>{
      console.log("here object from BE", data);
      this.findedMatch = data.match;
    })
   
  }

}
