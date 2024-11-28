import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html', // Use explicit relative path
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent]
})
export class SettingsPage {}
