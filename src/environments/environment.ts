// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from "firebase";

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyDHz5ohBDw6xyk7xNT45wCrEQydbCci8II",
    authDomain: "mystore-c54fe.firebaseapp.com",
    projectId: "mystore-c54fe",
    storageBucket: "mystore-c54fe.appspot.com",
    messagingSenderId: "827998817344",
    appId: "1:827998817344:web:7ca6c024345ccf036a23a5",
    measurementId: "G-J29MVTSNM5"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
