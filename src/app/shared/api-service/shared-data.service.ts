import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  policyInfo : any;

    sendData(data : any){
        this.policyInfo = data;
    }
    
}
