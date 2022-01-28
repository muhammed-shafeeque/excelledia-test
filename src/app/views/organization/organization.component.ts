import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from 'src/app/shared/api-service/main.service';
import { SharedDataService } from 'src/app/shared/api-service/shared-data.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  addform : FormGroup;
  policyInfo : any;

  constructor(private formBuilder : FormBuilder,
              private service : MainService,
              private sharedData : SharedDataService,) { 

    this.addform = this.formBuilder.group({
      'id' : '',
      'title' : ['',Validators.required],
      'description' : '',
      'organization_id' : 1
     });
  }

  ngOnInit(): void {

    this.policyInfo = this.sharedData.policyInfo;
    if(this.policyInfo != undefined){
      this.addform.patchValue({
        id : this.policyInfo.id,
        title : this.policyInfo.title,
        description : this.policyInfo.description,
        organization_id : 1
      });
    }
  }


  onSubit(zone : any){
    if(this.policyInfo != undefined){
      this.service.updatePolicy(zone.id,zone).subscribe(res =>{
      });
    } 
    else{
      this.service.postPolicy(zone).subscribe(res =>{
        if(res){
          this.cancel();
        }
      });
    }
    
  }

  cancel(){
    this.addform.reset();
    this.sharedData.sendData(undefined);
  }


  ngOnDestroy(){
    this.sharedData.sendData(undefined);
  }


}
