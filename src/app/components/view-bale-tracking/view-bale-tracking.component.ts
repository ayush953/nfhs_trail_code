import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeIcons } from 'primeng/api';
import { BalesTrackingService } from 'src/app/services/bales-tracking.service';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-view-bale-tracking',
  templateUrl: './view-bale-tracking.component.html',
  styleUrls: ['./view-bale-tracking.component.scss']
})
export class ViewBaleTrackingComponent implements OnInit{

  events1 : any[]=[];
  events2 : any[]=[];
  disp = false;
  ubin : any = undefined;
  baleTracking! : any[];

  constructor(private fb : FormBuilder,
    private router:ActivatedRoute,
    private route : Router,
    private baleTrackingService : BalesTrackingService) {

  }

  ngOnInit(): void {
    //console.log('In View Bale tracking On Init');

    this.router.params.subscribe(params => {
      //console.log("In router params view Bale Details before ubin:--", this.ubin);
      this.ubin = params['ubin'];
      //console.log("In router params view Bale Details after ubin :--", this.ubin);
    })

    if(this.ubin == undefined || this.ubin == null || this.ubin == ''){
      //console.log('In view Bale Details Ubin params if condition checked. Ubin :--', this.ubin);
      this.route.navigate(['/bale/search/byUbin']);
    }
  this.getTrackingDetails();

  }

  updateTracking(){
    //console.log('In View Bale Tracking. UpdateTracking()');
    this.route.navigate(['/bale/tracking/update',{ubin:this.ubin}])
  }

  async getTrackingDetails(){
    this.baleTracking = await lastValueFrom(this.baleTrackingService.getTrackingDetailsByUbin(this.ubin));
    //console.log('In view Bale Tracking, Get Tracking details. Bale tracking :--', this.baleTracking);
    this.baleTracking.forEach(element =>{
        element.timestamp = new Date(element.timestamp);
    });
    if(this.baleTracking.length !==0){
      this.disp = true;
    }
  }
}
