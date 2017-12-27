import ReactOnRails from 'react-on-rails';

import HelloWorldApp from '../bundles/HelloWorld/startup/HelloWorldApp';
import BookingApp from '../bundles/Bookings/startup/BookingApp';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  BookingApp,
  HelloWorldApp
});
