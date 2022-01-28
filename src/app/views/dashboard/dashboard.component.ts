import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/shared/api-service/main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'status'];
  dataSource = [];
  allInfo: any;
  
  constructor(private service : MainService) { }

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

}

