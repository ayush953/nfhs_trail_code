import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CciBranch } from 'src/app/models/CciBranch';
import { DataService } from 'src/app/services/data.service';
import {lastValueFrom} from 'rxjs';
import { CciWarehouse } from 'src/app/models/CciWarehouse';
import { BaleService } from 'src/app/services/bale.service';
import { UbinMst } from 'src/app/models/UbinMst';
import { BaleDetails } from 'src/app/models/BaleDetails';
import { BalesTrackingService } from 'src/app/services/bales-tracking.service';

@Component({
  selector: 'app-update-bale-tracking',
  templateUrl: './update-bale-tracking.component.html',
  styleUrls: ['./update-bale-tracking.component.scss']
})
export class UpdateBaleTrackingComponent implements OnInit{

  ubin :any;
  showForm : any= false;
  baleTrackForm : any = FormGroup;
  branches! : CciBranch[];
  warehouses! : CciWarehouse[];
  latitude : any;
  longitude : any;
  baleUbin! : any;
  response : any;

  constructor(private fb : FormBuilder,
    private router:ActivatedRoute,
    private route : Router,
    private dataService : DataService,
    private baleService : BaleService,
    private baletrackService : BalesTrackingService) {

  }
  ngOnInit(): void {
    this.getLocation();
    //console.log('In Update Bale tracking. On Init');

    this.baleTrackForm = this.fb.group({
      baleUbin :'',
      timestamp : '',
      deviceId : '',
      deviceName : '',
      latitude : '',
      longitude : '',
      location : '',
      trackingStatus : '',
      remarks : '',
      hostIp : '',


    })
    this.router.params.subscribe(params => {
      //console.log("In router params view Bale Details before ubin:--", this.ubin);
      this.ubin = params['ubin'];
      //console.log("In router params view Bale Details after ubin :--", this.ubin);
      this.patchBaleTrackValues();
      this.getBranchList();
      this.getUbinObj(this.ubin);
    })
    if(this.ubin == undefined || this.ubin == null || this.ubin == ''){
      //console.log('In view Bale Details Ubin params if condition checked. Ubin :--', this.ubin);
      this.showForm = true;
    }


  }

  onUbinSumbit(){
    //console.log('In Update Bale Tracking. On Ubin Submit. This. ubin is :--',this.ubin);
    this.patchBaleTrackValues();
    this.getBranchList();
    this.showForm = false;
  }
  async onSubmit(){
    //console.log('In Update bale tracking On Submit before geoloaction call');
    //console.log('In Update bale tracking On Submit after geoloaction call');
    this.baleTrackForm.patchValue({
      longitude : this.longitude,
      latitude : this.latitude,
    })
    //console.log('In Update Bale Tracking. On Submit. Form values :--', this.baleTrackForm.value);
    this.response = await lastValueFrom(this.baletrackService.saveBaleTracking(this.baleTrackForm.value));
    //console.log('In Update Bale Tracking. On Submit.After response from bale Track Service Save. Response is :--',this.response);
  }

  patchBaleTrackValues(){
    this.baleTrackForm.patchValue({
      deviceId : 'Web Application',
      deviceName : 'Laptop',
      hostIp : '10.210.10.242',
      timestamp : new Date(),
      baleUbin : this.ubin,
      longitude : this.longitude,
      latitude : this.latitude
    });
  }

  async onBranchSelect(event:any){
    //console.log('In on Branch Select. Selected Branch is :--',event.value);
    this.warehouses =await lastValueFrom(this.dataService.getWarehousesByBranchId(event.value.branchId));
  }

  async getBranchList(){
    this.branches =await lastValueFrom(this.dataService.getAllBranches());
  }

  onWarehouseSelect(event:any){
    //console.log('In Update Bale Tracking. On Warehouse Select. Warehouse selected is :--',event.value);

  }

  async getUbinObj(ubin:string){
    this.baleUbin = await lastValueFrom(this.baleService.getBaleByUbin(ubin));
  }

  getLocation(): void{
    //console.log('In getLocation');
    if (navigator.geolocation) {
      //console.log('In getLocation. If condition');
        navigator.geolocation.getCurrentPosition((position)=>{
          //console.log('In getcureent Position');
          const long = position.coords.longitude;
          const lat = position.coords.latitude;
         this.latitude = lat;
         this.longitude = long;
         //console.log('IN Update bale tracking component getLocation. Location is [lat,long] :-- [',lat,long,']');
        });
    } else {
       //console.log("No support for geolocation")
    }
  }
}
