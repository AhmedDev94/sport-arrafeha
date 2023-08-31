import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-displaying-team-players',
  templateUrl: './displaying-team-players.component.html',
  styleUrls: ['./displaying-team-players.component.css']
})
export class DisplayingTeamPlayersComponent implements OnInit {
  teamId : any ;
  teamList : any =[];

  constructor( private teamService : TeamService) { }

  ngOnInit() { this.teamService.getAllTeams().subscribe((res)=>
    {
      console.log("res", res);
    
    this.teamList = res.teams
    }
  )
  }
  getTeamId(event){
    
    this.teamId =  event.target.value
    console.log("here team id" , this.teamId);
   }
   search(){

   }


}
