import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  setName(name): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setClicks(numOfClicks): void {
    this.numOfClicks = numOfClicks;
  }

  getCkicks(): number {
    return this.numOfClicks;
  }

  private name: string;
  private numOfClicks: number;
}
