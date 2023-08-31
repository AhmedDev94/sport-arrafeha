import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player : any = {};
  addPlayerForm : FormGroup;
  teamList : any = [];
  teamId : any ;

  constructor(private playerService :  PlayerService, private router : Router , private teamService : TeamService) { }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe((res)=>
    {
      console.log("res", res);
    
    this.teamList = res.teams
    }
  )}
    
 addPlayer (){
  console.log("here the object" , this.player);
  this.player.teamId = this.teamId;
  this.playerService.addplayer(this.player).subscribe((data)=>{console.log("here response from BE", data.msg , data.player)});
  this.router.navigate(["admin"]);
 }
 getTeamId(event){
  console.log("here team id" , event.target.value);
  this.teamId =  event.target.value
 }
}
