import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { isNullOrUndefined, isArray } from 'util';

@Component({
  selector: 'd-simple-dropdown',
  templateUrl: './simple-dropdown.component.html',
  styleUrls: ['./simple-dropdown.component.css']
})
export class SimpleDropdownComponent implements OnInit {

  @Input() items : any = [];
  @Input() defaultIndex ?: number;
  @Input() textKey : string = "";

  @Output() onChanged : EventEmitter<any> = new EventEmitter<any>(); 

  showItems : boolean = false;
  selectedItem : any;

  constructor() { }

  ngOnInit() {
    this.validInputs();
    this.setDefaultSelectedItem();
  }

  validInputs(){
    if(!isNullOrUndefined(this.defaultIndex) && isNaN(this.defaultIndex)){
      throw `defaultIndex should be a number`;
    }

    if(!isNullOrUndefined(this.items) && !isArray(this.items)){
      throw `items should be an array`;
    }

  }

  setDefaultSelectedItem(){
    this.selectedItem = this.items[this.defaultIndex];
  }

  toggleItemList() : void{
    this.showItems = !this.showItems;
  }

  onItemClick(item:any){
    this.selectedItem = item;
    this.toggleItemList();
    this.onChanged.emit(this.selectedItem);
  }

}
