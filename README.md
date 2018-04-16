
# muhbeers-web
 Simple vanilla JS web app using Firebase. You post beers you've had and rate them to be seen by everyone else using the app live.


## Get Started
You'll need to setup a project on Firebase, create a `firebase-config.js` file, paste in the contents of the config object Firebase generates for you, then add that file to this projects `/js` folder.

To do that, see [Firebase's Getting Started Guide](https://firebase.google.com/docs/web/setup) or follow these steps:

1) Create a Firebase project in the [Firebase console](https://console.firebase.google.com/).

2) Enable Google Sign In, Cloud Firestore, and Storage (See below for more detailed info).

3) If you don't have an existing Firebase project, click **Add project** and enter either an existing Google Cloud Platform project name or a new project name.
If you already have apps in your project, click **Add Another App** from the project overview page.
From the project overview page in the Firebase console, click Add Firebase to your web app.

4) Go ahead and open a text editor and save the file as `firebase-config.js`

5) Copy and paste your project's customized code snippet shown on Firebase into the file

Below is an example of what your `firebase-config.js` file should look like:

```
  var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    projectId: "<PROJECT_ID>",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
  firebase.initializeApp(config);
  ```

## Things to Enable in Firebase Console
App requires Google Sign In (authentication), Cloud Firestore (database), and Storage (bucket for photos)

1) Under *Authentication* > *Sign-In Methods* > *Google*: Toggle the Enabled switch and click **Save**
2) Under *Database*: Go through Cloud Firestore (In Beta) Setup Guide, default rules are fine
3) Under *Storage*: Go through Setup Guide, default rules are fine

## Run on Localhost
If you just try opening `index.html` in your browser and you see errors in the console, it's probably because you need to be on a Localhost.
Easiest way to do that (if you're on a mac):
1) Open Terminal
2) `cd` into the `Starting` or `Completed` directory (depending on what you're working on)
3) Run: `python -m SimpleHTTPServer`

You should now be able to visit `localhost:8000` in your browser and see the running code
