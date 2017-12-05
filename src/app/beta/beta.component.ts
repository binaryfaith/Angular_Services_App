import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  numbers2: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.numbers2 = this._dataService.retrieveNumbers2();
  }
  pushTwo(){
    var num2 = Math.floor(Math.random()*100)
    this._dataService.addNumber2(num2);
  }

}
