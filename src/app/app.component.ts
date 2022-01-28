import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'excelledia';

  constructor(private router : Router){

  }


  addOrganization(){
    this.router.navigate(['/organization']);
  }
}
