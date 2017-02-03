import { Component, OnInit ,Input, Output, EventEmitter,AfterContentInit, ContentChild,
  AfterViewChecked, AfterViewInit, ViewChild,ViewChildren} from '@angular/core';
import {FetchDataService} from '../Services/fetch-data.service';

@Component({
  selector: 'modifyoptions',
  templateUrl: './EditComponent.component.html'
})
export class EditComponent implements OnInit {

  constructor(public fetchDataSvc : FetchDataService) { 
    
  }

  ngOnInit() {
  }


  @ Input() dataToEdit:any = {};

  @ Output() emitResult : EventEmitter<any> = new EventEmitter();
  
submitafterModify(){
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
      alert("data has been added succesfully");
      // The product list should get refreshed automatically
      this.emitResult.emit(true);
      this.fetchDataSvc.refreshList(true);
    }
    else{
      alert(result.errorMessage);
    }

    
}
}


