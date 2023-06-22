import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BaleDetails } from 'src/app/models/BaleDetails';
import { BaleService } from 'src/app/services/bale.service';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-view-bale-details',
  templateUrl: './view-bale-details.component.html',
  styleUrls: ['./view-bale-details.component.scss']
})
export class ViewBaleDetailsComponent implements OnInit {

  constructor(private fb : FormBuilder,
    private router:ActivatedRoute,
    private route : Router,
    private baleService : BaleService) {

  }

  ubin: any = undefined;
  bale! : any;
  ngOnInit(): void {
   //console.log('In View Bale Details Component. On Onit');
   this.router.params.subscribe(params => {
    //console.log("In router params view Bale Details before ubin:--", this.ubin);
    this.ubin = params['ubin'];
    //console.log("In router params view Bale Details after ubin :--", this.ubin);
  })
  if(this.ubin == undefined || this.ubin == null || this.ubin == ''){
    //console.log('In view Bale Details Ubin params if condition checked. Ubin :--', this.ubin);
    this.route.navigate(['/bale/search/byUbin']);
  }
  this.getBaleDetailsByUbin();
  }

  async getBaleDetailsByUbin(){
    //console.log('In view bale details getBale Details by Ubin.');
    this.bale =await lastValueFrom(this.baleService.getBaleByUbin(this.ubin));
    //console.log('In view bale details getBale Details by Ubin. Bale Details :--', this.bale);
    this.bale.lotDetails.heapDate = new Date(this.bale.lotDetails.heapDate);
    this.bale.balePressDate = new Date(this.bale.balePressDate);
  }

  onViewBaleTracking(){
    //console.log('In Scan Qr Component. View Bale tracking');
    this.route.navigate(['/bale/tracking/view',{ubin:this.bale.ubinMst.ubin}]);
  }

  onSubmit(){
    //console.log('In view Bale Details On Submit', this.bale);
  }

  onViewLotDetails(id:any){
    //console.log('In view Bale Details. Lot id received for viewing lot details is :--', id);
    this.route.navigate(['/lot/details/view',{lotId : id}])
  }
}
