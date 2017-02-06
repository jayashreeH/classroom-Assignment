import { Component, OnInit,Input } from '@angular/core';
import {appFetchDataService} from '../Services/appFetch-data.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  jsonProductList : any;
  showEditFlag = false;

  item :any;

  appFetchDataSvc : appFetchDataService;

  constructor(fetchDataSvc : appFetchDataService) {
    this.appFetchDataSvc  = fetchDataSvc;
    this.getDataFromServer(fetchDataSvc);
    this.appFetchDataSvc.refreshList$.subscribe(result => this.refreshListonAdd(result));
   }

  ngOnInit() {
  }

  showEditDialog(item){
     this.showEditFlag = true;
     this.item = item;
     console.log(item);
  }

  getDataFromServer(appFetchDataSvc : appFetchDataService){
    appFetchDataSvc.getListOfProducts().subscribe((result) => {console.log(this.jsonProductList = result)},
    error => {
      console.log(error);
    });
  } 

  getOption(evt){
     console.log("test");
     this.refreshListonAdd(true);
  }

  refreshListonAdd(flagValue : boolean){
    if (flagValue == true){
      this.getDataFromServer(this.appFetchDataSvc);
    }
    
  }

}
