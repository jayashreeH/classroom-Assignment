import { Component, OnInit } from '@angular/core';
import {appFetchDataService} from '../Services/appFetch-data.service';

@Component({
  selector: 'app-control-buttons',
  templateUrl: './control-buttons.component.html'
})
export class ControlButtonsComponent implements OnInit {

  constructor(appfetchDataSvc : appFetchDataService) {
    appfetchDataSvc.refreshList$.subscribe(result => this.showElements(result));
   }

showListFlag = false;
showAddEditFlag = false;

  ngOnInit() {
  }

  showList(){
   this.showListFlag = true;
  }

  showAddEditDialog(){
     this.showAddEditFlag = true;
     this.showListFlag = false;
  }

 showElements(result : boolean){
     this.showAddEditFlag = false;
     this.showListFlag = true;
  }
}
