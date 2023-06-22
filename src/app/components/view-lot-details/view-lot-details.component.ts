import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BitsBaleVariety } from 'src/app/models/BitsBaleVariety';
import { CciBranch } from 'src/app/models/CciBranch';
import { CciCentre } from 'src/app/models/CciCentre';
import { CciFactory } from 'src/app/models/CciFactory';
import { BaleLotService } from 'src/app/services/bale-lot.service';
import { DataService } from 'src/app/services/data.service';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-view-lot-details',
  templateUrl: './view-lot-details.component.html',
  styleUrls: ['./view-lot-details.component.scss']
})
export class ViewLotDetailsComponent implements OnInit {

    constructor(private dataService: DataService,
        private fb: FormBuilder,
        private baleLotService: BaleLotService,
        private route: ActivatedRoute,
        private router : Router) {
      }

    lotForm: any = FormGroup;
    lotId : any;
    lot! : any;
    branches: CciBranch[] = [];
    centres: CciCentre[] = [];
    factories: CciFactory[] = [];
    baleVarieties: BitsBaleVariety[] = [];
    selectedBranch!: CciBranch;
    selectedCentre!: CciBranch;
    selectedBaleVariety!: BitsBaleVariety;
    showForm = false;
    res : any;

    ngOnInit() {
        this.route.params.subscribe(params => {
            //console.log("In router params view Lot Details before lotid:--", this.lotId);
            this.lotId = params['lotId'];
            //console.log("In router params view Lot Details after lotid :--", this.lotId);
        })

        this.lotForm = this.fb.group({
          centreId: {},
          cropYear: '',
          factoryId: {},
          heapNo: '',
          heapDate: '',
          lotNo: '',
          operationName: '',
          pressRunningFrom: '',
          pressRunningTo: '',
          pressMarkNo: '',
          pressMachineNo:'',
          varietyId: {}

        })

        //console.log("In View Lot Details On Init");
        this.getBaleVarieties();
        this.getLot();
    }

    async getLot(){
        this.lot =await lastValueFrom(this.baleLotService.getBaleLotByLotId(this.lotId));
        //console.log('In view lot details after get lot value--->',this.lot);
        this.showForm = true;
        this.getCentresByBranchId(this.lot.centreId.branchId.branchId);
        this.getFactoriesByCentreId(this.lot.centreId.centreId);
        this.patchLotValues();
    }

    patchLotValues(){
        this.lotForm.patchValue({
            centreId: this.lot.centreId,
            cropYear: this.lot.cropYear,
            factoryId: this.lot.factoryId,
            heapNo: this.lot.heapNo,
            heapDate: new Date(this.lot.heapDate),
            lotNo: this.lot.lotNo,
            operationName: this.lot.operationName,
            pressRunningFrom: this.lot.pressRunningFrom,
            pressRunningTo: this.lot.pressRunningTo,
            pressMarkNo: this.lot.pressMarkNo,
            pressMachineNo: this.lot.pressMachineNo,
            varietyId: this.lot.varietyId
          })
    }

    async getCentresByBranchId(id:any){
        this.centres =await lastValueFrom(this.dataService.getCentresByBranchId(id));
    }

    async getFactoriesByCentreId(id:any){
        this.factories =await lastValueFrom(this.dataService.getFactoriesByCentreId(id));
    }

    async getBaleVarieties() {
        //console.log("In Create Lot getBaleVarieties");
        this.baleVarieties = await lastValueFrom(this.dataService.getBaleVerieties());
     }

    onFactorySelect(event: any) {
        //console.log("In Create Lot On factory select function", event.value);
      }

    async onCentreSelect(event: any) {
        //console.log("In Create Lot onCentreSelect :--", event.value);
        this.factories = await lastValueFrom(this.dataService.getFactoriesByCentreId(event.value.centreId));
    }
    onBaleVarietySelect(event: any) {
        //console.log("In creat Lot onBaleVarietySelect :-- ", event.value);
    }

    onSubmit(){
        //console.log('In on submit view lot details :--', this.lotForm.value);
    }
}
