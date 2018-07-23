import { Component } from '@angular/core';
import {SwPush} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Progressive Web Cat';

  readonly VAPID_PUBLIC_KEY = "BA6kEBuF4ZALTANS2a5KNNPaBsBR5euqzBatZcGRTiW3zgSV7d0kfpNTuOjpzQco62Y0yP6A612TDrhp9DpADVk";

  constructor(private swPush: SwPush) {}

  subscribeToNotifications() {
    debugger;
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then(sub => console.log('SUB', sub))
      .catch(err => console.error('Could not subscribe to notifications', err));
  }
}
