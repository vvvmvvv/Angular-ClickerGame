import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { InfoService } from '../service/info.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})



export class StartComponent {

  constructor(private info: InfoService) {
      
  }

  // ngOnDestroy(): void {
    
  // }

  setName(): void {
    this.info.setName(this.name);
  }


  name:string = '';

}
