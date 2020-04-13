
export class Pagination{
    pageSize : number;
    totalItem : number;
    currentPage : number;
    totalPage : number;
    
    constructor(pageSize : number,
        totalItem : number,
        currentPage : number,
        totalPage : number){
        this.pageSize = pageSize;
        this.totalItem = totalItem;
        this.currentPage = currentPage;
        this.totalPage = totalPage;
    }

    
    
    getFromItemIndex():number{
        if(this.totalItem < 1){
            return -1;
        }
        return this.totalItem * (this.pageSize - 1); 
    }

    getToItemIndex():number{
        if(this.totalItem < 1){
            return -1;
        }

        return this.currentPage * this.pageSize - 1;
    }
}
