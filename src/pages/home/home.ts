import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';
import { SocialSharing } from '@ionic-native/social-sharing';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Grocery";



  constructor(public socialSharing: SocialSharing, public dialogService: InputDialogServiceProvider, public dataService: GroceriesServiceProvider, public alertCtrl: AlertController, public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  loadItems() {
    return this.dataService.getItems();
  }

  removeItem(item, index) {
    console.log("Removing Item - ", item.name);
    const toast = this.toastCtrl.create({
      message: "Removing Item - " + item.name,
      duration: 3000
    });
    this.dataService.removeItem(index);
    toast.present();
  }

  shareItem(item, index) {
    console.log("Sharing Item - ", item, index);
    const toast = this.toastCtrl.create({
      message: "Sharing Item - " + index + " ...",
      duration: 3000
  });

  toast.present();

  let message = "Grocery Item - Name: j" + item.name + " - Quantity: " + item.Quantity;
  let subject = "Shared via Groceries app";

  this.socialSharing.share(message, subject).then(() => {
    // Sharing via email is possible
    console.log("Shared successfully!");
  }).catch((error) => {
    console.error("Error while sharing ", error);
  });

  }

  addItem() {
    this.dialogService.prompt();
  }

  editItem(item, index) {
    this.dialogService.prompt(item, index);
  }

  
}


