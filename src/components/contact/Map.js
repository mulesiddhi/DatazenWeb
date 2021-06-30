import './map.css'

import GoogleMapReact from 'google-map-react'
import React from 'react'

const LocationPin = ({ text }) => (
  <div className="pin">
    <i class="fas fa-map-marker-alt pin-icon"></i>
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) =>{ 
  
  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };
  
  
  return(
  <div className="map">
    <h2 className="map-h2">You can find us here</h2>

    <div className="google-map">
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB7EKyZA7a5aWQMPcGJiI3PLSgXf8blraM' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        yesIWantToUseGoogleMapApiInternals
  onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact> */}
      <div className='d-flex flex-wrap gmap'>
     <iframe className='imap' width="700" height="400" frameborder="0" src="https://www.google.com/maps?q=K.+J.+Somaiya+College+of+Engineering&t=&z=13&ie=UTF8&iwloc=&output=embed" scrolling="no">
     </iframe>
     <div className='m-2' >
        <a id="largeMapLink" target="_blank" href="https://www.bing.com/maps?cp=19.07241336108487~72.89565849304199&amp;sty=r&amp;lvl=16&amp;FORM=MBEDLD">View Larger Map</a> &nbsp; | &nbsp;
        <a id="dirMapLink" target="_blank" href="https://www.bing.com/maps/directions?cp=19.07241336108487~72.89565849304199&amp;sty=r&amp;lvl=16&amp;rtp=~pos.19.07241336108487_72.89565849304199____&amp;FORM=MBEDLD">Get Directions</a>
    </div>
</div>
    </div>
  </div>
)}

export default Map;