import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { playersTab } from 'src/app/data folder/data';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-players',
  templateUrl: './edit-players.component.html',
  styleUrls: ['./edit-players.component.css']
})
export class EditPlayersComponent implements OnInit {

 editPlayerForm : FormGroup;
 player : any = {};
 id : any ;
  constructor(private playerService: PlayerService , private router : Router ) { }

  ngOnInit() {
  this.id =localStorage.getItem("playerId");
  this.playerService.getplayerById(this.id).subscribe((data)=>{
    this.player = data.player
   });
 
  }
  validate (){
    this.playerService.updateplayer(this.player).subscribe((result)=>{
     console.log("here s the result after update" , result.msg) ;
     this.router.navigate(["admin"])
    })
  }
}
