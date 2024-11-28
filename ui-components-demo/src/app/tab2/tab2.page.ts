import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, 
         IonBadge, IonItemSliding, IonItemOptions, IonItemOption, IonIcon, 
         IonAvatar, IonThumbnail } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, trash, star, share, personCircle, image } from 'ionicons/icons';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, 
            IonLabel, IonBadge, IonItemSliding, IonItemOptions, IonItemOption, 
            IonIcon, IonAvatar, IonThumbnail, ExploreContainerComponent],
})
export class Tab2Page {
  constructor() {
    addIcons({ heart, trash, star, share, personCircle, image });
  }
}
