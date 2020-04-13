import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Pagination } from '../../models/pagination.model';

@Component({
  selector: 'simple-pagination',
  templateUrl: './simple-pagination.component.html',
  styleUrls: ['./simple-pagination.component.css']
})
export class SimplePaginationComponent implements OnChanges {

  @Input() totalItem : number = 0;
  @Input() pageSize : number = 0;
  @Output() onChange = new EventEmitter<Pagination>();

  reviewPageList : number[];

  pagination : Pagination = new Pagination(0,0,0,0);

  constructor() { }

  ngOnChanges() : void{
    this.pagination.pageSize = this.pageSize; 
    this.pagination.totalItem = this.totalItem;
    this.pagination.totalPage = this.getTotalPage(this.pagination.pageSize,this.pagination.totalItem);
    this.pagination.currentPage = 1;
    this.render(this.pagination.currentPage, this.pagination.totalPage);
  }

  getTotalPage(pageSize:number, totalItem:number) : number{
    return Math.ceil(totalItem / pageSize) ;
  }

  render(currentPage:number, totalPage:number){
    let reviewPageList : number[] = [];
    let startAt : number = 1;
    let endAt : number = 1;
    
    if(this.totalItem > 0){
      startAt = Math.max(currentPage - 2, 1);
      endAt = Math.min(currentPage + 2,totalPage);
      
      for(;startAt <= endAt; startAt++){
        reviewPageList.push(startAt);
      }
      this.reviewPageList = reviewPageList;
    }
    
    this.onChange.emit(this.pagination);
  }

  onPageClick(pageNumber:number) : void{
    if(this.pagination.currentPage == pageNumber){
      return;
    }

    this.pagination.currentPage = pageNumber;
    this.render(this.pagination.currentPage, this.pagination.totalPage);
  }

  nextPage() : void{
    if(this.pagination.currentPage < this.pagination.totalPage){
      this.pagination.currentPage++;
      this.render(this.pagination.currentPage, this.pagination.totalPage);
    }
  }

  previousPage() : void{
    if(this.pagination.currentPage > 1){
      this.pagination.currentPage--;
      this.render(this.pagination.currentPage, this.pagination.totalPage);
      
    }
  }

}
