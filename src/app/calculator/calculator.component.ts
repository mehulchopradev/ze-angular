import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  firstNo: string;
  secondNo: string;
  ans: string;
  operation: string;
  isDisabled: boolean;
  isAnsVisible: boolean;

  constructor() {
    this.firstNo = '7';
    this.operation = '-';
    this.secondNo = '3';
    this.ans = '4';
    this.isDisabled = false;
    this.isAnsVisible = true;
  }

  ngOnInit() {
  }

  onFirstNoChange(firstNo) {
    this.firstNo = firstNo;
    this.isAnsVisible = false;
    if (isNaN(parseInt(this.firstNo))) {
      // invalid number
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }

  onSecondNoChange(secondNo) {
    this.secondNo = secondNo;
    this.isAnsVisible = false;
    if (isNaN(parseInt(this.secondNo))) {
      // invalid number
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }

  onCalculate() {
    const first = this.firstNo;
    const second = this.secondNo;
    const operation = this.operation;

    const ifirst = parseInt(first);
    const isecond = parseInt(second);
    let ans;

    if (operation == '+') {
      ans = ifirst + isecond;
    } else if (operation == '-') {
      ans = ifirst - isecond;
    } else if (operation == '*') {
      ans = ifirst * isecond;
    } else {
      alert('No such operation');
    }

    this.isAnsVisible = true;
    this.ans = ans;
  }
}
