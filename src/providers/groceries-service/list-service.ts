
import { Injectable } from '@angular/core';

/*
  Generated class for the GroceriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

  export class ListServiceProvider {
    constructor() {

    }
    
    list = [1,2,3,4,5,6,7,8,9];

    getList() {
      return this.list;
    }
}
