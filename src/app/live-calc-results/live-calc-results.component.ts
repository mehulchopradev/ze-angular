import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-live-calc-results',
  templateUrl: './live-calc-results.component.html',
  styleUrls: ['./live-calc-results.component.scss']
})
export class LiveCalcResultsComponent implements OnInit {

  @Input()
  first: string;

  @Input()
  second: string;

  @Input()
  ans: string;

  @Input()
  operation: string;

  @Input()
  isAnsVisible: boolean;

  constructor() { }

  ngOnInit() {
  }

}
