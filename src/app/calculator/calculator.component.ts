import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public num1: number;
  public num2: number;
  public result:number;

  Add()
  {
    this.result = this.num1 + this.num2;
  }

  Sub()
  {
    this.result = this.num1 - this.num2;
  }

  Mul()
  {
    this.result = this.num1 * this.num2;
  }

  Div()
  {
    this.result = this.num1 / this.num2;
  }
  constructor() { }

  ngOnInit() {
  }
}
