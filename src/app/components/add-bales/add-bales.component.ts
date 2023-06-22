import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaleLot } from 'src/app/models/BaleLot';
import { BaleLotService } from 'src/app/services/bale-lot.service';
import { lastValueFrom } from 'rxjs';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BaleDetails } from 'src/app/models/BaleDetails';
import { BaleService } from 'src/app/services/bale.service';

@Component({
  selector: 'app-add-bales',
  templateUrl: './add-bales.component.html',
  styleUrls: ['./add-bales.component.scss']
})
export class AddBalesComponent implements OnInit {

  constructor(private router: ActivatedRoute,
    private baleLotService: BaleLotService,
    private fb: FormBuilder,
    private baleService : BaleService
  ) { }

  createdLotId: any;
  baleLot!: any;
  baleForm: any = FormGroup;
  balesCount: any = FormGroup;
  hideBaleForm = true;
  fullLotNo: any;
  visible! : boolean;
  existingBalesCount : number = 0;
  currentPrNo! : any;

  ngOnInit(): void {
    this.balesCount = this.fb.group({
      count: '',
    });

    this.baleForm = this.fb.group({
      bales: this.fb.array([])
    })
    //console.log("In Lot Success Create Page On Init");

    this.router.params.subscribe(params => {
      //console.log("In router params Subscribe created Lot before :--", this.createdLotId);
      this.createdLotId = params['createdLotId'];
      //console.log("In router params Subscribe created Lot after :--", this.createdLotId);
    })
    this.getLotById();

  }

  setFullLotNo() {
    this.fullLotNo = this.baleLot.pressMarkNo + "." + this.baleLot.cropYear + "." + this.baleLot.centreId.centreCode + "." + this.baleLot.centreId.centreName + "." + this.baleLot.varietyId.varietyName + "." + this.baleLot.operationName + "." + this.baleLot.pressRunningFrom + "-" + this.baleLot.pressRunningTo + "." + this.baleLot.pressMachineNo + "." + this.baleLot.lotNo;
  }

  async getLotById() {
    //console.log("In Lot Success Create getLotById");
    this.baleLot =  await lastValueFrom(this.baleLotService.getBaleLotByLotId(this.createdLotId));
    //console.log("In Lot Success Create getLotById. Bale Lot is :--", this.baleLot);
    this.baleLot.heapDate = new Date(this.baleLot.heapDate);
    this.baleLot.statusUpdateTimestamp = new Date(this.baleLot.statusUpdateTimestamp);
    this.setFullLotNo();
    this.getExistingBalesCount();
  }

  get balesAsFormArray(): any {
    return this.baleForm.get('bales') as FormArray;
  }

  bales(): FormGroup {
    return this.fb.group({
      ubin: '',
      lotDetailsId: '',
      baleNo: '',
      moisture: '',
      balePressDate: '',
      balePressWeight: '',
      status: '',
      pressRunningNo: ''
    });
  }

  addBale(count: number): void {
    //console.log("In LotCreate Success Add Bale");
    let prNo = this.currentPrNo;
    let baleNo = 0;
    if(this.existingBalesCount !==0){
      baleNo = this.existingBalesCount;
    }
    if(prNo == undefined || prNo == null){
      prNo = this.baleLot.pressRunningFrom;

    }
    //console.log("In LotCreate Success Add Bale. prNo is :--", prNo);
    for (let index = 0; index < count; index++) {
      const form: FormGroup = this.bales();
      //console.log("In LotCreate Success Add Bale. For loop Index is :--", index, "and the form before patchValue is :--", form.value);
      form.patchValue({
        baleNo: baleNo + 1,
        pressRunningNo: prNo,
        status: 'pending',
        balePressDate: new Date(),
        lotDetailsId: this.baleLot,
        approvedTimestamp : new Date()
      })
      //console.log("In LotCreate Success Add Bale. For loop Index is :--", index, "and the form after patchValue is :--", form.value);
      this.balesAsFormArray.push(form);
      prNo = parseInt(prNo)+1;
      baleNo +=1;
    }

  }

  onSubmit() {
    //console.log("In Lot Success Create onSubmit :--", this.balesCount.value);
    this.hideBaleForm = false;
    this.baleForm.reset();
    this.clearFormArray(this.balesAsFormArray);
    this.addBale(this.balesCount.value.count);
  }

  onAllBalesSubmit() {
    //console.log("In Lot create Success. In All Bales Submit form values are :--", this.baleForm.value.bales);
    let res = lastValueFrom(this.baleService.saveAllBales(this.baleForm.value.bales));
    //console.log("In Lot create Success. In All Bales Submit the response after all bales save :--",res);
  }

  viewBaleLotDetails() {
    //console.log("On lot create success viewBaleLotDetails");
    this.visible = true;
  }

  async getExistingBalesCount(){
    //console.log("In Lot Create Success. Get Existing Bales Count");
    let balesListByLotId = await lastValueFrom(this.baleService.getBalesByLotId(this.baleLot.lotDetailsId));
    //console.log("In Lot Create Success. Get Existing Bales Count the list of Bales is :--",balesListByLotId);
    this.existingBalesCount = balesListByLotId.length;
    //console.log("The existing bales count set is :--",this.existingBalesCount);
    const curentPrNo = balesListByLotId.reduce(function(prev, current) {
      return (prev.pressRunningNo > current.pressRunningNo) ? prev : current
  });
  //console.log("The max of press running number is :--", curentPrNo.pressRunningNo);
  this.currentPrNo = parseInt(curentPrNo.pressRunningNo)+1;
  }
  clearFormArray = (formArray: FormArray) => {
    while (formArray.length !== 0) {
      formArray.removeAt(0)
    }
  }

}
