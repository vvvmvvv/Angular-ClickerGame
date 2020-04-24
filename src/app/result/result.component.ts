import { Component, OnInit } from '@angular/core';
import { InfoService } from '../service/info.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html'
})
export class ResultComponent implements OnInit {

  constructor(private info: InfoService) { }

  ngOnInit(): void {
    this.name = this.info.getName();
    this.numOfClicks = this.info.getCkicks();
  }

  name: string;
  numOfClicks : number;

}
