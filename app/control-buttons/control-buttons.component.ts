import { Component, OnInit } from '@angular/core';
import {FetchDataService} from '../Services/fetch-data.service';

@Component({
  selector: 'control-buttons',
  templateUrl: './control-buttons.component.html'
})
export class ControlButtonsComponent implements OnInit {

  constructor(fetchDataSvc : FetchDataService) {
    fetchDataSvc.refreshList$.subscribe(result => this.showElements(result));
   }

showListFlag = false;
showAddEditFlag = false;

  ngOnInit() {
  }

  showItemList(){
   this.showListFlag = true;
  }

  showAddEdit(){
     this.showAddEditFlag = true;
     this.showListFlag = false;
  }

 showElements(result : boolean){
     this.showAddEditFlag = false;
     this.showListFlag = true;
  }
}
