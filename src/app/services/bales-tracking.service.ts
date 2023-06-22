import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BalesTrackingService {

  ipPort = '10.210.10.242:8181';
  //ipPort = '10.210.5.62:8181';

  constructor(private http : HttpClient) { }

  saveBaleTracking(baleTracking:any):Observable<any>{
    return this.http.post<any>('http://'+this.ipPort+'/bits/bales/tracking/save',baleTracking);
  }

  getTrackingDetailsByUbin(ubin:string):Observable<any>{
    return this.http.get<any>('http://'+this.ipPort+'/bits/bales/tracking/getTrackingByUbin/'+ubin);
  }
}
