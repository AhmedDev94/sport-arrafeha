import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {

  calculForm: FormGroup;
  resMsg: any;
  imcResult : any ;
  name : any ;
  

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.calculForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      taille: ["", [Validators.required]],
      poids: ["", [Validators.required]],
    });
  }
 
  calcul() {
    this.searchService.calculImc(this.calculForm.value).subscribe((result) => {
        console.log("here data from BE ", result , result.imc);
        this.imcResult = result.imc;
        this.resMsg = result.msg;
        this.name = result.name;
        
      });
  }


}
