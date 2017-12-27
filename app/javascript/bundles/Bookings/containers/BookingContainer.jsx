
import { connect } from 'react-redux';
import Booking from '../components/Booking';
const mapStateToProps = (state) => ({ 
  title: state.title
});

export default connect(mapStateToProps)(Booking);
