import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  numbers: number[] = [];
  numbers2: number[] = [];
  numbers3: number[] = [];


  constructor() { }

  randomGen(num2: number){
   num2 = Math.floor(Math.random()*100)
   return num2 
  }

  retrieveNumbers(): number[]{
    return this.numbers;
  }
  retrieveNumbers2(): number[]{
    return this.numbers2;
  }
  retrieveNumbers3(): number[]{
    return this.numbers3;
  }
  addNumber(num: number) {
    this.numbers.push(num);
  }

  addNumber2(num2: number) {
    this.numbers2.push(num2);
  }

  delta(){
    var sum = 0;
    var sum2 = 0;
    for(var i=0;i<this.numbers.length;i++){
      sum += this.numbers[i]
    }
    for(var j=0;j<this.numbers2.length;j++){
      sum2 += this.numbers2[j]
    }
    var num3 = sum - sum2 
    this.numbers3.push(num3);
    console.log(this.numbers3)
  }

}
