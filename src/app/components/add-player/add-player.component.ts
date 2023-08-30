import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player : any = {};
  addPlayerForm : FormGroup;

  constructor(private playerService :  PlayerService, private router : Router) { }

  ngOnInit() {
  }
 addPlayer (){
  console.log("here the object" , this.player);
  this.playerService.addplayer(this.player).subscribe((data)=>{console.log("here response from BE", data.msg)});
  this.router.navigate(["admin"]);
 }
}
