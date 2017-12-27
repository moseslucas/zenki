import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/bookingStore';
import BookingContainer from '../containers/BookingContainer';

const BookingApp = (props) => (
  <Provider store={configureStore(props)}>
    <BookingContainer />
  </Provider>
);

export default BookingApp;
