import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { BaleLot } from 'src/app/models/BaleLot';
import { BitsBaleVariety } from 'src/app/models/BitsBaleVariety';
import { CciBranch } from 'src/app/models/CciBranch';
import { CciCentre } from 'src/app/models/CciCentre';
import { CciFactory } from 'src/app/models/CciFactory';
import { BaleLotService } from 'src/app/services/bale-lot.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-create-lot',
  templateUrl: './create-lot.component.html',
  styleUrls: ['./create-lot.component.scss']
})
export class CreateLotComponent implements OnInit {

  constructor(private dataService: DataService,
    private fb: FormBuilder,
    private baleLotService: BaleLotService,
    private router: Router) {

  }
  response! : BaleLot;
  lotForm: any = FormGroup;
  branches: CciBranch[] = [];
  centres: CciCentre[] = [];
  factories: CciFactory[] = [];
  baleVarieties: BitsBaleVariety[] = [];
  selectedBranch!: CciBranch;
  selectedCentre!: CciBranch;
  selectedBaleVariety!: BitsBaleVariety;

  ngOnInit(): void {
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
    //console.log("In Create Lot On Init");
    this.getAllBranches();
    this.getBaleVarieties();
  }

  async getAllBranches() {
    //console.log("In Create Lot getFactroies");
    this.branches = await lastValueFrom(this.dataService.getAllBranches());
    //console.log("get All Branches :--", this.branches);
  }
  async getCentres(branch: CciBranch) {
    //console.log("In Create Lot getFactroies");
    this.centres = [];
    //console.log("get Centres :--", this.centres);

  }
  async getFactories(centre: CciCentre) {
    //console.log("In Create Lot getFactroies");
    this.factories = [];
    //console.log("get Factroies :--", this.factories);

  }

  async getBaleVarieties() {
    //console.log("In Create Lot getBaleVarieties");
    this.baleVarieties = await lastValueFrom(this.dataService.getBaleVerieties());
  }

  onSubmit() {
    //console.log("In Crate Lot On Submit. Form :--", this.lotForm.value);
    this.baleLotService.saveBaleLot(this.lotForm.value).subscribe(
      {
        next: (v) => {
          //console.log("In Create Lot on Submit. In next response is :--", v);
          this.response = v;
        },
        error: (e) => { console.error("In Create Lot on Submit. In error is :--", e) },
        complete: () => {
          //console.log("In Create Lot on Submit. Completed. Routing to Success Lot Create Page");
          this.router.navigate(['/lot/addBales',{createdLotId: this.response.lotDetailsId}])
        }
      }

    )
  }

  onFactorySelect(event: any) {
    //console.log("In Create Lot On factory select function", event.value);
  }

  async onBranchSelect(event: any) {
    //console.log("In Create Lot onBranchSelect :--", event.value);
    this.centres = await lastValueFrom(this.dataService.getCentresByBranchId(event.value.branchId));
  }
  async onCentreSelect(event: any) {
    //console.log("In Create Lot onCentreSelect :--", event.value);
    this.factories = await lastValueFrom(this.dataService.getFactoriesByCentreId(event.value.centreId));
  }
  onBaleVarietySelect(event: any) {
    //console.log("In creat Lot onBaleVarietySelect :-- ", event.value);
  }
}
