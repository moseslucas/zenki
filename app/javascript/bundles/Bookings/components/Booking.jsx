import PropTypes from 'prop-types';
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker  } from "react-google-maps"

export default class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: this.props.title };
  }

  render() {
    const {title} = this.state
    return (
      <div>
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAH5gCwpe42PPIOJZFzW9Q33rTK9xJh3ko"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <label> Pick-Up </label><input className='form-control'/>
        <label> Destination </label><input className='form-control'/>
      </div>
    );
  }
}


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 14.6066560, lng: 121.0816800 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 14.6066560, lng: 121.0816800 }} />}
  </GoogleMap>
))
