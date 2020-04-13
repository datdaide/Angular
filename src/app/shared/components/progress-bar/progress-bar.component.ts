import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'd-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnChanges {

  @Input() capacityValue ?: number = 100;
  @Input() currentValue ?: number = 0;
  @Input() redWhenUnder ?: number = 20;

  percent : number = 0;

  constructor() { }

  ngOnChanges() : void {
    this.calculatePercent();
  }

  calculatePercent(): void{
    this.percent = this.currentValue / this.capacityValue * 100;
  }

}
