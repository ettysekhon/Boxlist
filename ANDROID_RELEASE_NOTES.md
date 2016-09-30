## Release android:

### Generate Key:
  1. keytool -genkey -v -keystore boxlist.keystore -alias boxlist -keyalg RSA -keysize 2048 -validity 10000
  * Enter keystore password: *boxlistes*
  * What is your first and last name: *Etty Sekhon*
  * What is the name of your Organization Unit: *NexGeneration Solutions Limited*
  * What is name of your city: London
  * What is state: Greater *London*
  * What is 2 letter country code: *GB*
  * For subsequent passwords *just press enter*
  * We now have the signing KEY!

### Setup gradle variables:
  1. Place the boxlist.keystore file under the *android/app*
  2. Edit the file ~/.gradle/gradle.properties and add the following (replace ***** with the correct keystore password, alias and key password) directory in your project folder.

  ```
    BOXLIST_RELEASE_STORE_FILE=boxlist.keystore
    BOXLIST_RELEASE_KEY_ALIAS=boxlist
    BOXLIST_RELEASE_STORE_PASSWORD=boxlistes
    BOXLIST_RELEASE_KEY_PASSWORD=boxlistes```

### Adding signing config to your app's gradle config:
Edit the file android/app/build.gradle in your project folder and add the signing config:
```
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            storeFile file(BOXLIST_RELEASE_STORE_FILE)
            storePassword BOXLIST_RELEASE_STORE_PASSWORD
            keyAlias BOXLIST_RELEASE_KEY_ALIAS
            keyPassword BOXLIST_RELEASE_KEY_PASSWORD
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```
### Generating the release APK
Simply run the following in a terminal:
```
cd android && ./gradlew assembleRelease
```
The generated APK can be found under android/app/build/outputs/apk/app-release.apk, and is ready to be distributed.

### Testing the release build of your app
(we could run APT tool to check if apk has debuggable flag enabled - google can reject if it is).

Optional:

1. run

```
jarsigner - verify -verbose
```
Before uploading the release build to the Play Store, make sure you test it thoroughly. Install it on the device using:

```
react-native run-android --variant=release
```


### Enabling Proguard to reduce the size of the APK (optional)
To enable Proguard, edit android/app/build.gradle:
```
/**
 * Run Proguard to shrink the Java bytecode in release builds.
 */
def enableProguardInReleaseBuilds = true
```

## Submit to Playstore:
1. goto http://developer.android.com
* create a developer account
* click the Android icon on the lefthand menu to
view the Applications menu
* Click the “+ Add new application” button to create your application
* Here, you’ll be given the option of either uploading an APK first, or editing your Play
Store listing. Either is fine.
To upload your APK, find the release APK on your file system—it should be in
android/app/build/outputs/apk/app-release.apk
* Select your app-release.apk file
* Once your APK file is uploaded, you can fill out the rest of your Play Store listing, or
set up Beta Testing.

## Beta Testing via the Play Store
1. The Google Play Store provides easy beta testing functionality. Once you’ve uploaded
your APK, select the Beta Testing tab to start adding beta testers
* Do open or closed beta testing

## Play Store Listing SHA1
DEBUG:
4C:F6:8D:80:9C:AC:E1:AF:48:7A:1D:19:49:BB:60:12:70:C9:68:C8
RELEASE:
AE:8D:B4:AE:B2:34:4A:9A:0C:9A:E7:E4:91:23:69:66:F7:B3:44:96
