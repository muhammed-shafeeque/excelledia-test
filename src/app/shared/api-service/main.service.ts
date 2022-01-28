import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GlobalVariable } from '../global';

@Injectable({
  providedIn: 'root'
})
export class MainService { 

  authToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJmYTJlYTE4ZWNiMWRiMGQ4MDNlNTliZDAzZjQ1NDkxZDU0MjNmNWIxNGJkODlmNGY3MDAzY2YyMDNiOTU1ZjRiODc5MTk5ZTczMzIzMzkwIn0.eyJhdWQiOiIzIiwianRpIjoiMmZhMmVhMThlY2IxZGIwZDgwM2U1OWJkMDNmNDU0OTFkNTQyM2Y1YjE0YmQ4OWY0ZjcwMDNjZjIwM2I5NTVmNGI4NzkxOTllNzMzMjMzOTAiLCJpYXQiOjE2NDMzNDQ1MzAsIm5iZiI6MTY0MzM0NDUzMCwiZXhwIjoxNjc0ODgwNTMwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.lQHMHzE24fK_Kdz_d5tp3r-Ke1U_nroyWVLqQ6W0njY_xUCwry2YeZPrf60aVoaz6CFMBPa0k5mEXzA5L_NGPZgvV-54qMCODuPu_55fwXlq7yjinu_kX6-Q2O03NcEmHJts_M8jK-_hYkqzM_ux1NFYaoLdoTqMatAo_kkrMaRPO8j14OxPiqW_kJ6ROUvrRw9kSMJ4m6gxvpJDgPLf9I6_sDSP2A7HF6y50xAYxgZxfB7ZSZw-T3pg8QK8DMUl2wzd5tzeLbjoU5sn4HIHEcMmmiO5UYgV-LNZsqPpepEs4h-XNuiJTnb-rOGAHDtY9vOWepyFHAUmWcHx-gLu4M70UP7WquOuiqJiA-qCmKMjvnP5eX6baqZ31gkSclgzZ0VAUquFsE1ptMHumBV23MGURJudmvMT43UXYNEkQi4xqo9H7lq0eCbvP91hwFZVRn3AZDyZ-xWpHddmsrDWS-XRc1MhOShtqhZVF8j5cefYrGVOAq6-bo0psFQmyD5Mwa9sSrAcHdQseC7qKAVcWxQlR55nzXZ2G8GNYfgODHZDz-qLQ1jdmdU1jbuT32qzVczdCmI0WaAgVOMnFRqZno-uLr8lhyIKxSZUkV0r21mrlkUhz7ZWprjVDevWg-rX9F-2cUeggBlnHfIAJrYq2tAjuTv1TvnQFU819lffzlM"
  headers = new HttpHeaders();
  baseApiUrl: any;

  constructor(private http: HttpClient) {

    let auth = `Bearer ${this.authToken}`;
    this.headers = this.headers.set('Authorization',auth);

    this.baseApiUrl = GlobalVariable.BASE_API_URL;
   }

   getAllList(){
     return this.http.get(this.baseApiUrl + 'api/v1/organization-policies', {headers: this.headers})
   }


}
