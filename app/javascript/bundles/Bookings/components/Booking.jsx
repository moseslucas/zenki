import PropTypes from 'prop-types';
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker  } from "react-google-maps"
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel'

export default class Booking extends React.Component {
  constructor(props) {
    super(props);
    this._handlePickupChange = this._handlePickupChange.bind(this)
    this.state = { 
      title: this.props.title ,
      lat: 14.6066560,
      lng: 121.0816800
    }
  }

  render() {
    const {title, lat, lng} = this.state
    return (
      <div>
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAH5gCwpe42PPIOJZFzW9Q33rTK9xJh3ko"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          lat={lat}
          lng={lng}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <label> Pick-Up </label>
        <select className='form-control' onChange={this._handlePickupChange}>
          <option value='14.6066560,121.0816800'>Proud Cloud</option>
          <option value='14.6008212,121.08805940000002'>Launch Garage</option>
          <option value='14.601748,121.049892'> Green Hills </option>
          <option value='10.412129,123.98614900000007'> Liloan Cebu </option>
        </select>
        <label> Destination </label><input className='form-control'/>
      </div>
    );
  }

  mapGoogle () {
  }

  _handlePickupChange (e) {
    const pickup = e.target.value.split(',')
    this.setState({
      ...this.state,
      lat: parseFloat(pickup[0]),
      lng: parseFloat(pickup[1])
    })
  }
}


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{lat: 14.6066560, lng: 121.0816800}}
    center={{ lat: props.lat, lng: props.lng }}
  >
    <MarkerWithLabel
      position={{ lat: props.lat, lng: props.lng }}
      labelAnchor={new google.maps.Point(0, 0)}
      labelStyle={{backgroundColor: 'white', fontSize: '14px', padding: '16px'}}
    >
      <div>Pick Up</div>
    </MarkerWithLabel>
  </GoogleMap>
))
