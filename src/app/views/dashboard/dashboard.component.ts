import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/shared/api-service/main.service';
import { SharedDataService } from 'src/app/shared/api-service/shared-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'status'];
  dataSource = [];
  allInfo: any;
  
  constructor(private service : MainService,
              private sharedata : SharedDataService,
              private router : Router) { }

  ngOnInit() {
    this.getAllList();
  }

  getAllList(){
    this.service.getAllList().subscribe(res =>{
      this.allInfo = res;
      this.allInfo = this.allInfo.data;
      this.dataSource = this.allInfo;
    });
  }

  onEdit(data :any){
    this.sharedata.sendData(data);
    this.router.navigate(['/organization']);
  }

  onDelete(data :any){
    this.service.deletePolicy(data.id).subscribe(res =>{
      if(res){
          this.getAllList();
      }
    });
  }

}

