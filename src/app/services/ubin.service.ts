import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbinService {

  ipPort = '10.210.10.242:8181';
  //ipPort = '10.210.5.62:8181';

  constructor(private http : HttpClient) { }

  getUbinByUbin(ubin:string) :Observable<any>{
    return this.http.get<any>('http://'+this.ipPort+'/bits/ubin/getUbinDetails/'+ubin);
  }
}
