import { Component, ViewChild } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonModal, 
  IonButtons,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  AlertController,
  ToastController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton,
    IonModal,
    IonButtons,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea
  ]
})
export class Tab3Page {
  @ViewChild(IonModal) modal!: IonModal;

  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  cancelModal() {
    this.modal.dismiss();
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Contact Form',
      subHeader: 'Choose Action',
      message: 'What would you like to do with this form?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Form action cancelled');
          }
        },
        {
          text: 'Clear',
          cssClass: 'danger',
          handler: () => {
            console.log('Form cleared');
            this.modal.dismiss();
          }
        },
        {
          text: 'Submit',
          cssClass: 'primary',
          handler: () => {
            console.log('Form submitted');
            this.showToast();
            this.modal.dismiss();
          }
        }
      ]
    });
    await alert.present();
  }

  private async showToast(position: 'top' | 'middle' | 'bottom' = 'bottom') {
    const toast = await this.toastController.create({
      message: 'Form submitted successfully!',
      duration: 3000,
      position: position,
      color: 'success',
      cssClass: 'custom-toast',
      buttons: [
        {
          side: 'start',
          icon: 'checkmark-circle',
          text: 'Done',
          handler: () => {
            console.log('Form submission confirmed');
          }
        },
        {
          side: 'end',
          role: 'cancel',
          text: 'UNDO',
          handler: () => {
            console.log('Form submission undone');
            this.modal.present();
          }
        }
      ]
    });
    await toast.present();
  }

  async showTopToast() {
    await this.showToast('top');
  }

  async showMiddleToast() {
    await this.showToast('middle');
  }
}
