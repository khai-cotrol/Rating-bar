import { Component,Input, EventEmitter,Output, OnInit } from '@angular/core';
import {IRatingUnit} from "../irating-unit";

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
  @Input() max =10;
  @Input() ratingValue = 1;
  @Output() ratingChange =new EventEmitter<number>();
  @Output() ratingUnits :Array<IRatingUnit>=[];
  constructor() { }

  ngOnInit(): void {
    this.calculate(this.max,this.ratingValue)
  }
  // ngOnChanges(){
  //   this.calculate(this.max,this.ratingValue)
  //
  // }
  select(index:number){
    this.ratingValue =index +1;
    this.ratingUnits.forEach((ratingUnit,idx)=>ratingUnit.active=idx<this.ratingValue);
    this.ratingChange.emit(this.ratingValue)
  }
  enter(index:number){
    // this.ratingUnits.forEach((ratingUnit,idx)=>ratingUnit.active=idx<=index);
    for (let i = 0; i < this.ratingUnits.length; i++) {
      this.ratingUnits[i].active = i<=index
    }
  }
  calculate(max:number,ratingValue:number){
    for (let i = 0; i < max; i++) {
      let ratingUnit ={value:i+1,active:i<ratingValue}
      this.ratingUnits.push(ratingUnit);
    }
  }



}
