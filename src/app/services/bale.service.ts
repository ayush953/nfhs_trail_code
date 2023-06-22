import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaleDetails } from '../models/BaleDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaleService {

  ipPort = '10.210.10.242:8181';
  //ipPort = '10.210.5.62:8181';

  constructor(private http : HttpClient) { }

  saveAllBales(bales : any[]) : Observable<any[]>{
    console.log("In Bale Service Save All Bales. Bales :--",bales);
    return this.http.post<any[]>('http://'+this.ipPort+'/bits/bales/saveAll',bales);
  }

  getBalesByLotId(lotId:number) : Observable<any[]>{
    console.log("In Bale Service get Bales By Lot Id");
    return this.http.get<any[]>('http://'+this.ipPort+'/bits/bales/getByLotId/'+lotId);

  }

  getBaleByUbin(ubin:any):Observable<any>{
    return this.http.get<any>('http://'+this.ipPort+'/bits/bales/getByUbin/'+ubin);
  }

  getBalesByBranchId(branchId:any) : Observable<any[]>{
    console.log("In Bale Service get Bales By Branch Id");
    return this.http.get<any[]>('http://'+this.ipPort+'/bits/bales/getByBranchId/'+branchId);
  }

  getBalesByCentreId(centreId:any) : Observable<any[]>{
    console.log("In Bale Service get Bales By Branch Id");
    return this.http.get<any[]>('http://'+this.ipPort+'/bits/bales/getByCentreId/'+centreId);
  }

  getBalesByFactoryId(factoryId:any) : Observable<any[]>{
    console.log("In Bale Service get Bales By Branch Id");
    return this.http.get<any[]>('http://'+this.ipPort+'/bits/bales/getByFactoryId/'+factoryId);
  }
}
