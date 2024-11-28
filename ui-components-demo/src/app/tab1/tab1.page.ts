import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, 
         IonCard, IonCardHeader, IonCardTitle, 
         IonCardSubtitle, IonCardContent, 
         IonButton, IonImg } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle,
    IonCardSubtitle, IonCardContent,
    IonButton, IonImg,
    ExploreContainerComponent
  ],
})
export class Tab1Page {
  constructor() {}
}
