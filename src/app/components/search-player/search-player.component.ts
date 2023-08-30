import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SearchService } from "src/app/services/search.service";

@Component({
  selector: "app-search-player",
  templateUrl: "./search-player.component.html",
  styleUrls: ["./search-player.component.css"],
})
export class SearchPlayerComponent implements OnInit {
  searchForm: FormGroup;
  errorMsg: any;
  findedPlayers: any;
  

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      age: ["", [Validators.required]],
    });
  }
  search() {
    this.searchService.searchPlayer(this.searchForm.value).subscribe((result) => {
        console.log("here data from BE ", result);
        this.findedPlayers = result.players;
      });
  }
}
