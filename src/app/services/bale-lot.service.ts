import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaleLot } from '../models/BaleLot';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BaleLotService {

    ipPort = '10.210.10.242:8181';
    //ipPort = '10.210.5.62:8181';

    constructor(private http: HttpClient) { }

    saveBaleLot(baleLot: any): Observable<any> {
        console.log("In BaleLot Service SaveBaleLot :--", baleLot);
        return this.http.post<any>('http://' + this.ipPort + '/bits/bales/lot/save', baleLot)
    }

    getBaleLotByLotId(id: number): Observable<any> {
        console.log("In BaleLot Service getBaleLotByLotId :--", id);
        //const res = this.http.get<any>('http://' + this.ipPort + '/bits/bales/lot/getByLotId/' + id);
        // console.log("get lot by Id response in service is :--", res.subscribe({
        //     next: (v) => {
        //         console.log("In get lot by id subscribe next. res is :---", v);
        //     }
        // }))
        return this.http.get<any>('http://' + this.ipPort + '/bits/bales/lot/getByLotId/' + id);
    }

    getBaleLotsByBranchId(id: any): Observable<any[]> {
        return this.http.get<any[]>('http://' + this.ipPort + '/bits/bales/lot/getByBranch/' + id);
    }

    getBaleLotsByCentreId(id:any): Observable<any[]>{
        return this.http.get<any[]>('http://' + this.ipPort + '/bits/bales/lot/getByCentreId/' + id);
    }

    getBaleLotsByFactoryId(id : any):Observable<any[]>{
        return this.http.get<any[]>('http://' + this.ipPort + '/bits/bales/lot/getByFactoryId/' + id);
    }
}
