
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { BitsBaleVariety } from 'src/app/models/BitsBaleVariety';
import { CciBranch } from 'src/app/models/CciBranch';
import { CciCentre } from 'src/app/models/CciCentre';
import { CciFactory } from 'src/app/models/CciFactory';
import { BaleLotService } from 'src/app/services/bale-lot.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-lot',
  templateUrl: './list-lot.component.html',
  styleUrls: ['./list-lot.component.scss']
})
export class ListLotComponent implements OnInit {

    constructor(private dataService : DataService,
        private baleLotService :  BaleLotService,
        private router : Router){}

    branches: CciBranch[] = [];
    centres: CciCentre[] = [];
    factories: CciFactory[] = [];
    centresOptions : CciCentre[] = [];
    factoriesOptions : CciFactory[] = [];
    response : any[] = [];
    centresFromLot : any[] = [];
    factoriesFromLot :any [] = [];
    lotList : any[] = [];
    varietiesOptions : BitsBaleVariety[] = [];
    showTable = false;

    ngOnInit(): void {
        //console.log('In List Lot coponent On Init method');
        this.getAllBranches();
    }

    async getAllBranches() {
        //console.log("In Create Lot getFactroies");
        this.branches = await lastValueFrom(this.dataService.getAllBranches());
        //console.log("get All Branches :--", this.branches);
      }

    async onFactorySelect(event: any) {
        //console.log("In List Lot On factory select function", event.value);
        this.response =[];
        this.response =  await lastValueFrom(this.baleLotService.getBaleLotsByFactoryId(event.value.factoryId));
        this.lotList =[];
        this.lotList = this.response;
        this.lotList.forEach(element=>{
            element.heapDate = new Date(element.heapDate);
        })
        //console.log('In List Lot Component. After Factory Selection the bale lots list is :--',this.lotList);
        this.showTable = true;
    }

      async onBranchSelect(event: any) {
        //console.log("In List Lot onBranchSelect :--", event.value);
        this.response = [];
        this.response = await lastValueFrom(this.baleLotService.getBaleLotsByBranchId(event.value.branchId));
        //console.log('In List Lot Component. After Branch Selection. Response is :--',this.response);
        this.lotList = [];
        this.lotList = this.response;
        this.lotList.forEach(element=>{
            element.heapDate = new Date(element.heapDate);
        })
        //console.log('In List Lot Component. After Branch Selection. Lot list is :--',this.lotList);
        this.centresFromLot = [];
        this.response.forEach(element => {
            this.centresFromLot.push(element.centreId);
        })
        //console.log('In List Lot Component. After Branch Selection. Duplicated Centres List is :--',this.centresFromLot);
        this.centres = [];
        this.centresFromLot.forEach(element =>{
        if(this.centres.length ==0){
            this.centres.push(element);
        }else if(!this.checkIfCentrePresent(this.centres,element.centreId)){
            this.centres.push(element);
        }
       })
        //console.log('In List Lot Component. After Branch Selection. Set of Centres List is :--',this.centres);
    }
      async onCentreSelect(event: any) {
        //console.log("In List Lot onCentreSelect :--", event.value);
        this.response = [];
        this.response = await lastValueFrom(this.baleLotService.getBaleLotsByCentreId(event.value.centreId));
        this.lotList = [];
        this.lotList = this.response;
        this.lotList.forEach(element=>{
            element.heapDate = new Date(element.heapDate);
        })
        //console.log('In List Lot Component. After Centre Selection. Lot List is :--',this.lotList);
        this.factoriesFromLot = [];
        this.response.forEach(element => {
            this.factoriesFromLot.push(element.factoryId);
        });
        this.factories = [];
        this.factoriesFromLot.forEach(element =>{
        if(this.factories.length ==0){
            this.factories.push(element);
        }else if(!this.checkIfFactoryPresent(this.factories,element.factoryId)){
            this.factories.push(element);
        }
       });
    }

    checkIfCentrePresent(array : any[], id:any){
        let res = false;
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if(element.centreId==id){
                res = true;
                break;
            }
        }
        return res;
    }
    checkIfFactoryPresent(array : any[], id:any){
        let res = false;
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if(element.factoryId==id){
                res = true;
                break;
            }
        }
        return res;
    }

    onViewEditClick(lot : any){
        //console.log('In List Lot Component The selected lot is :--', lot);
        this.router.navigate(['/lot/details/view',{lotId : lot.lotDetailsId}]);
    }
}
