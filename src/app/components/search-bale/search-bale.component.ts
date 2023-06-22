import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './search-bale.component.html',
  styleUrls: ['./search-bale.component.scss']
})
export class SearchBaleComponent implements OnInit {

  ubinForm : any = FormGroup;

  constructor(private fb : FormBuilder,
    private router : Router) {

  }

  ngOnInit(): void {
    //console.log("In OnInit of Search Bale Component");
    this.ubinForm = this.fb.group({
      ubin:''
    })
  }

  onViewBaleDetails(){
    //console.log("In search Bale Component. In onSubmit. The form value is :--", this.ubinForm.value);
    this.router.navigate(['/bale/details/view',{ubin:this.ubinForm.value.ubin}]);
  }

  onViewBaleTracking(){
    //console.log('In Search Bale Component. View Bale tracking');
    this.router.navigate(['/bale/tracking/view',{ubin:this.ubinForm.value.ubin}]);
  }

}
