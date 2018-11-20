import { Injectable } from '@angular/core';

/*
  Generated class for the GroceriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceriesServiceProvider {

  constructor() {
    console.log('Hello GroceriesServiceProvider Provider');
  }


  items = [];

  getItems() {
    return this.items;
  }

  updateItem(item, index) {
    this.items[index] = item
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  }
  
  export class ListServiceProvider {
    constructor() {

    }
    
    list = [1,2,3,4,5,6,7,8,9];

    getList() {
      return this.list;
    }
}