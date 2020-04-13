import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pagination } from '../../models/pagination.model';
@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() totalItem :number;
  @Output() onChange : EventEmitter<Pagination> = new EventEmitter<Pagination>();

  defaultPageSizes : number[] = [1,2,3,10,20,30,50,100];
  defaultPageSizeIndex : number = 0;
  pageSize : number;

  constructor() { }

  ngOnInit() {
    this.pageSize = this.defaultPageSizes[this.defaultPageSizeIndex];
  }

  onPageSizeChanged(amountItem : number) : void {
    this.pageSize = amountItem;
  }

  paginationChangeReceiver(data :any) : void{
    this.onChange.emit(data);
  }

}
