import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CciBranch } from 'src/app/models/CciBranch';
import { CciCentre } from 'src/app/models/CciCentre';
import { CciFactory } from 'src/app/models/CciFactory';
import { BaleLotService } from 'src/app/services/bale-lot.service';
import { DataService } from 'src/app/services/data.service';
import { lastValueFrom } from 'rxjs';
import { BaleService } from 'src/app/services/bale.service';


@Component({
  selector: 'app-list-bales',
  templateUrl: './list-bales.component.html',
  styleUrls: ['./list-bales.component.scss']
})
export class ListBalesComponent implements OnInit{


    constructor(private dataService : DataService,
        private baleLotService :  BaleLotService,
        private router : Router,
        private baleService : BaleService){}

    branches: CciBranch[] = [];
    centres: CciCentre[] = [];
    factories: CciFactory[] = [];
    response : any[] = [];
    centresFromBaleList : any[] = [];
    factoriesFromBaleList :any [] = [];
    lotList : any[] = [];
    lotsFromBaleList : any[] = [];
    balesList : any[] = [];
    showTable = false;


    ngOnInit(): void {
        //console.log('In List Bales coponent On Init method');
        this.getAllBranches();
    }

    async getAllBranches() {
        //console.log("In List Bales getAll Brannches");
        this.branches = await lastValueFrom(this.dataService.getAllBranches());
        //console.log("get All Branches :--", this.branches);
    }

    async onFactorySelect(event: any) {
        //console.log("In List Bales On factory select function", event.value);
        this.response =[];
        this.response =  await lastValueFrom(this.baleService.getBalesByFactoryId(event.value.factoryId));
        this.balesList = [];
       this.balesList = this.response;
        this.balesList.forEach(element=>{
            element.balePressDate = new Date(element.balePressDate);
        })
        //console.log('In List Bales Component. After Factory Selection the bales list is :--',this.balesList);
        this.lotsFromBaleList = [];
        this.response.forEach(ele=>{
            this.lotsFromBaleList.push(ele.lotDetails);
        });
        //console.log('In List Bales Component. After Factory Selection the bales Lot duplicated list is :--',this.lotsFromBaleList);
        this.lotList = [];
        this.lotsFromBaleList.forEach(element=>{
            if(this.lotList.length ==0){
                this.lotList.push(element);
            }
            else if(!this.checkIfLotPresent(this.lotList,element.lotDetailsId)){
                this.lotList.push(element);
            }
        })
        //console.log('In List Bales Component. After Factory Selection the bales Lot list is :--',this.lotList);
    }

      async onBranchSelect(event: any) {
        //console.log("In List Bales onBranchSelect :--", event.value);
            this.response = [];
        this.response = await lastValueFrom(this.baleService.getBalesByBranchId(event.value.branchId));
        //console.log('In List Bales Component. After Branch Selection. Response is :--',this.response);
        this.balesList = [];
        this.balesList = this.response;
        this.balesList.forEach(element=>{
            element.balePressDate = new Date(element.balePressDate);
        })
        //console.log('In List Bales Component. After Branch Selection. Bales list is :--',this.balesList);
        this.centresFromBaleList = [];
        this.response.forEach(element => {
            this.centresFromBaleList.push(element.lotDetails.centreId);
        })
        //console.log('In List Bales Component. After Branch Selection. Duplicated Centres List is :--',this.centresFromBaleList);
        this.centres = [];
        this.centresFromBaleList.forEach(element =>{
        if(this.centres.length ==0){
            this.centres.push(element);
        }else if(!this.checkIfCentrePresent(this.centres,element.centreId)){
            this.centres.push(element);
        }

       })
        //console.log('In List Bales Component. After Branch Selection. Set of Centres List is :--',this.centres);
    }
      async onCentreSelect(event: any) {
        //console.log("In List Bales onCentreSelect :--", event.value);
        this.response = [];
        this.response = await lastValueFrom(this.baleService.getBalesByCentreId(event.value.centreId));
        this.balesList = [];
        this.balesList = this.response;
        this.balesList.forEach(element=>{
            element.balePressDate = new Date(element.balePressDate);
        })
        //console.log('In List Bales Component. After Centre Selection. Bales List is :--',this.balesList);
        this.factoriesFromBaleList = [];
        this.response.forEach(element => {
            this.factoriesFromBaleList.push(element.lotDetails.factoryId);
        });
        this.factories = [];
        this.factoriesFromBaleList.forEach(element =>{
        if(this.factories.length ==0){
            this.factories.push(element);
        }else if(!this.checkIfFactoryPresent(this.factories,element.factoryId)){
            this.factories.push(element);
        }
       });
       //console.log('In List Bales component. On Centre Select. Available Factories are :--', this.factories);
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

    checkIfLotPresent(array : any[], id:any){
        let res = false;
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if(element.lotDetailsId==id){
                res = true;
                break;
            }
        }
        return res;
    }

    async onLotSelect(event : any){
        //console.log('In list bales component. Selected lot is :--', event.value.lotDetailsId);
        this.balesList = [];
        this.showTable = true;
        this.balesList = await lastValueFrom(this.baleService.getBalesByLotId(event.value.lotDetailsId));
        this.balesList.forEach(element=>{
            element.balePressDate = new Date(element.balePressDate);
        })
        //console.log('In list bales component. On Lot Select Bales List is :--', this.balesList);
    }

    onViewEditClick(bale:any){
        //console.log('In List Bale component. On View Edit Click. Rhe selected bale is :--', bale);
        this.router.navigate(['/bale/details/view',{ubin : bale.ubinMst.ubin}]);
    }
}
