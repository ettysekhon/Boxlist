# Boxlist

An app developed in React Native for Android and iOS.

# Install GA

https://github.com/idehub/react-native-google-analytics-bridge

```
npm install --save react-native-google-analytics-bridge
react-native link react-native-google-analytics-bridge
```

## iOS only

https://facebook.github.io/react-native/docs/linking-libraries-ios.html

Next you will have to link a few more SDK framework/libraries which are required by GA (if you do not already have them linked.) Under the same "Link Binary With Libraries", click the + and add the following:
CoreData.framework
SystemConfiguration.framework
libz.tbd
libsqlite3.0.tbd
