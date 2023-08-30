import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  players : any  ;
  id : any ;
  findedPlayer : any ;

  constructor(private activatedRoute : ActivatedRoute , private playerService : PlayerService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.playerService.getplayerById(this.id).subscribe((data)=>{
      console.log("here object from BE", data);
      this.findedPlayer = data.player;
    })
  }

}
