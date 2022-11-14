import { Component } from '@angular/core';
import OneSignal from 'onesignal-cordova-plugin';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  result: string;

  constructor() {
    this.OneSignalInit();
  }

 OneSignalInit(): void {


  // NOTE: Update the setAppId value below with your OneSignal AppId.
  OneSignal.setAppId('6daa61c3-a98f-4ec8-9642-87960645983d');
  OneSignal.setNotificationOpenedHandler(function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  });

  // Prompts the user for notification permissions.
  //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 7) to better communicate to your users what notifications they will get.
  OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
      console.log("User accepted notifications: " + accepted);
  });
}


}
