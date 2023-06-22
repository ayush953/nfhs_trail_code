import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CciFactory } from '../models/CciFactory';
import { CciBranch } from '../models/CciBranch';
import { CciCentre } from '../models/CciCentre';
import { BitsBaleVariety } from '../models/BitsBaleVariety';
import { CciWarehouse } from '../models/CciWarehouse';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  ipPort = '10.210.10.242:8181';
  //ipPort = '10.210.5.62:8181';

  constructor(private http: HttpClient) { }

  getAllFactories(): Observable<CciFactory[]> {
    return this.http.get<CciFactory[]>(
      'http://'+this.ipPort+'/bits/master/factory/getAll'
    );
  }        
  getAllBranches():Observable<CciBranch[]>{
    return this.http.get<CciBranch[]>(
      'http://'+this.ipPort+'/bits/master/branch/getAll'
    );
  }

  getCentresByBranchId(id :number):Observable<CciCentre[]>{
    return this.http.get<CciCentre[]>(
      'http://'+this.ipPort+'/bits/master/centre/getByBranchId/'+id
    );
  }

  getFactoriesByCentreId(id :number):Observable<CciFactory[]>{
    return this.http.get<CciFactory[]>(
      'http://'+this.ipPort+'/bits/master/factory/getByCentreId/'+id
    );
  }

  getBaleVerieties():Observable<BitsBaleVariety[]>{
    return this.http.get<BitsBaleVariety[]>(
      'http://'+this.ipPort+'/bits/bales/variety/getAll'
    );
  }

  getWarehousesByBranchId(id :number) : Observable<CciWarehouse[]>{
    return this.http.get<CciWarehouse[]>('http://'+this.ipPort+'/bits/master/warehouse/getByBranchId/'+id);
  }
}
