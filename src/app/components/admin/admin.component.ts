import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 x="admin dashbord";
 pageOfItems: Array<any>;
 teams: any[] = []; // Your data source
 

  constructor() { }

  ngOnInit() {
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }
   
}
