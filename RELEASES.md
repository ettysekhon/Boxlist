## Releases (Improvements & Fixes):
---

### Version 1.0.1
1. Add some extra validation on the order form for
  * mobile phone
  * email address
2. Use Halladeys images
3. Maps display location of Halladeys with pin
4. Use react-native-map for Android compatibility
5. When submitting order, prevent user from pressing send again (show an alert)
6. Remove a little spacing above list view on checkout (below header)
7. Upload App
8. Register App on Itunes connect
9. Deploy on Test Flight
10. Create snap shots of screen for app store (Itunes connect)
11. Deploy to App store

### Version 1.0.2
1. When no products returned in product API or product API failure show page with refresh button and message for customer to check connection
2. When products are loading display the loading dialog/spinner
3. When no connection and attempting to submit order then show a dialog to get connection
4. Fix image zoom (resize mode contain)
5. Replace Halladeys no image with custom no image
6. Add Halladeys map pin

### Version 1.0.3/1.0.4/1.05
1. Update checkout numbers
  * VAT (20%) (subtotal*0.2)
  * Total (subtotal*1.2)
  * Remove delivery row (only collection currently)
2. Format prices across screens to 2 d.p (£4.9 to £4.90)
3. Implement Salman's updated messages
4. Implement server side monitoring and alerts through Datadog
5. Conduct load testing of server side using loader.io

### Version 1.0.6
1. Update to latest version of React Native (fix issues)
2. Fix any android issues
  * fix Maps - get google api key and update manifest
  * custom styling for inputs
  * launch screen
  * icons (http://stackoverflow.com/questions/34329715/how-to-make-react-native-app-icon)
      mipmap-xxhdpi
        144x144
      mipmap-xhdpi
        96x96
      mipmap-hdpi
        72x72
      mipmap-mdpi
        48x48
  * handle android back button (remove nav bar back button)
3. Refactor application code (number of improvements)
4. Deploy to Android Play store
  * Generate signing key
  * Set up gradle variables
  * Add signing config to apps gradle config
  * Generate release APK
  * Install release APK on device - maybe
5. Submit to App Store/Play store
  * distribute/test APK
  * add details for play store
  * generate assets:
      - 2 screen shots
      - 512x512 app icon png
      - 1024x500 feature image
      - promo graphic/promo video ?

### Version 1.0.7 [not implemented]
1. On landscape the status bar is not shown therefore reduce white space on Nav Bar header
2. Cache products so that they are available when there is no connection rather than display no products
3. handle connection change status - show brief animated message
4. Basket Icon not round and cutting off with single digit products and breaks with multi digit
5. Maps
  * zoom into map a little more
  * show label as default.
6. Implement better keyboard entry on inputs (see how competitors implement keyboard for forms)
7. Implement responsive font sizes?
8. Basket Counter - red circle doesn't for large numbers
9. Multiples of - ability to add multiple of an item to basket

## Future Release Plan:
---

### Version 1.0.8 (low priority?)
1. Code push

### Version 1.0.9 (Increment 2 (Oct 15):

#### App:
1. Implement better grid view test on all device dimensions - check limitations [looks ok, test further?]
1. Add categories
2. Basic search - filtering
3. Mobile analytics
  https://www.google.co.uk/analytics/mobile/
  https://analytics.facebook.com/features/
  https://github.com/idehub/react-native-google-analytics-bridge

#### Web Dashboard (simple as possible):
1. Supplier order view
  * print order
  * update order status
  * partial order or cancel order? -> update db
2. SMS notification - order notification / notification to customer?
3. BONUS - app notifications
4. Email confirmations?

#### Scraper:
  1. Investigate why this does not work in container (Nightmare issue) or create script to ensure it runs on host and updates RethinkDB container.

### Version 1.0.10 (Increment 3):
  1) Payments supplier vs send order directly to supplier?
    * Worldpay
    * Stripe
    * Paypal
  2) Delivery options
    * Add delivery address fields (post code)
    * pre-populate input fields (local storage)
  3) User accounts
  4) Extra features ???


  1. Categories (filtering)
  2. Search
  4. Analytics (page view, app open) -> GA (5 days)
  6. Notifications ("Order has been accepted")
  7. Improved scrapper
  8. Payments
  9. Accounts (7 days)
  10. Dashboard ()

1. Filtering, Categories = 4 + 7
2. Search = 7
3. Analytics = 5
4. Dashboard =
5. Notifications = 3
6. Improved scrapper = 5
7. Accounts = 7
8. Payments = 21
9. Unknown = 7

1. Categories [DONE]
2. Search [DONE]
3. Filtering [DONE]
4. Analytics
5. Dashboard
6. Notifications
7. Improved scrapper
8. Payments
9. Accounts


ANALYTICS - MOBILE ANALYTICS
ORDER - EMAIL -> RECIPIENTS
IMPROVED SCRAPPER
PAGINATION
