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

### Version 1.0.6
1. Update to latest version of React Native (fix issues)
2. Fix any android issues
3. Deploy to Android Play store
4. Submit to App Store/Play store

### Version 1.0.7
1. On landscape the status bar is not shown therefore reduce white space on Nav Bar header
2. Cache products so that they are available when there is no connection rather than display no products
3. handle connection change status - show brief animated message
4. Basket Icon not round and cutting off with single digit products and breaks with multi digit
5. Maps
  * zoom into map a little more
  * show label as default.
6. Implement better keyboard entry on inputs (see how competitors implement keyboard for forms)

## Future Release Plan:
---

### Version 1.0.8 (low priority?)
1. Code push

### Version 1.0.9 (Increment 2 (Oct 15):

#### App:
  1. Implement better grid view test on all device dimensions
  2. Add categories
  3. Basic search - filtering
  4. Mobile analytics

#### Web Dashboard:
  1. Supplier order view
    * print order
    * update order status
    * partial order or cancel order? -> update db
  2. SMS notification - order notification / notification to customer?
  3. BONUS - app notifications

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
