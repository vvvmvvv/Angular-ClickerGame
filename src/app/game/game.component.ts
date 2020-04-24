import { Component, OnInit, NgModule, Input } from '@angular/core';
import { InfoService } from '../service/info.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(private info: InfoService, private router: Router){
  }
  ngOnInit(): void {
    this.name = this.info.getName(); 
  }
  times: number[] = [10, 20, 30, 60];

  name: string;
  numOfClicks : number = 0;
  isClick = false;
  choosenTime: number = 10;
  interval;
  textBtn: string = 'START GAME';

  incrementHandler(): number{
    if(!this.isClick){
      this.startTimer();
    }
    this.isClick = true;
    return this.numOfClicks++;
  }
 
  startTimer(): void {
    this.textBtn = 'CLICK!'
    this.interval = setInterval(() => {
      if(this.choosenTime > 0) {
        this.choosenTime--;
      } else {
        this.choosenTime = 10;
        this.pauseTimer();
        this.goToResult();
      }
    },1000)
  }

  goToResult(): void{
    this.info.setClicks(this.numOfClicks);
    this.router.navigate(['/result']);
  }

  pauseTimer(): void {
    clearInterval(this.interval);
  }

}
