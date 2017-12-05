import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-kappa',
  templateUrl: './kappa.component.html',
  styleUrls: ['./kappa.component.css']
})
export class KappaComponent implements OnInit {
  numbers3: number[] = [];
  
    constructor(private _dataService: DataService) { }
    ngOnInit() {
      this.numbers3 = this._dataService.retrieveNumbers3();
    }
    kappaClick(){
      this._dataService.delta();
      this.numbers3 = this._dataService.retrieveNumbers3()
    }

  
  }
