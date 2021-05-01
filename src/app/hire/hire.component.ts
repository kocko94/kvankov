import {Component, OnInit} from '@angular/core';
import {TIMELINES} from './TimelinesData';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss']
})
export class HireComponent implements OnInit {
  public timelines = TIMELINES;

  constructor() {
  }

  ngOnInit(): void {
  }
}


