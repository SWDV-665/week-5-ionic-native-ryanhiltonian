
import { Injectable } from '@angular/core';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(public alertCtrl: AlertController, public dataService: GroceriesServiceProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

prompt(item?, index?) {
  const prompt = this.alertCtrl.create({
    title: item? 'Edit Item' : 'Add Item',
    message: item? "Change the item information" : 'Enter the information for the new item',
    inputs: [
      {
        name: 'name',
        value: item? item.name: null,
        placeholder: "name"
      },
      {
        name: 'quantity',
        value: item? item.quantity : null,
        placeholder: "quantity",
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: item => {

        }
      },
      {
        text: 'Save',
        handler: item => {
          console.log("Editing" + item.name);
          if (index !== undefined) {
            this.dataService.updateItem(item, index);
          }
          else {
            this.dataService.addItem(item);
          }
        }
      }
    ]
  });
  prompt.present();
}

}
