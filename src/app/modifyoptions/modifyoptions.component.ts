import { Component, OnInit ,Input, Output, EventEmitter,AfterContentInit, ContentChild,
  AfterViewChecked, AfterViewInit, ViewChild,ViewChildren} from '@angular/core';
import {appFetchDataService} from '../Services/appFetch-data.service';

@Component({
  selector: 'app-modifyoptions',
  templateUrl: './modifyoptions.component.html'
})
export class ModifyoptionsComponent implements OnInit {

  constructor(public fetchDataSvc : appFetchDataService) { 
    
  }

  ngOnInit() {
  }


  @ Input() dataToEdit:any = {};

  @ Output() emitResult : EventEmitter<any> = new EventEmitter();
  
onSubmit(){
  delete this.dataToEdit._id;
    console.log(this.dataToEdit);
    this.fetchDataSvc.modifyListOfProducts(this.dataToEdit)
    .subscribe((result) => { this.successMessage(result);console.log(result)},
    error => {
      console.log(error);
    });
}

  successMessage(result){
  if (result.status = "success" && result.errorMessage == null){
      alert("data has been posted succesfully");
      // The product list should get refreshed automatically
      this.emitResult.emit(true);
      this.fetchDataSvc.refreshList(true);
    }
    else{
      alert(result.errorMessage);
    }

    
}
}


