
import { connect } from 'react-redux';
import Booking from '../components/Booking';
import BookingV2 from '../components/BookingV2'
const mapStateToProps = (state) => ({ 
  title: state.title
});

export default connect(mapStateToProps)(BookingV2);
