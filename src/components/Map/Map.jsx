import React from 'react';
import GoogleMapReact from 'google-map-react';
import styles from './Map.module.scss';
import { ImLocation } from 'react-icons/im';

export default function Map({ ...activeJob }) {
  const defaultProps = {
    center: {
      lat: activeJob.latitude,
      lng: activeJob.longitude,
    },
    zoom: 15,
  };

  const AnyReactComponent = ({ text }) => (
    <div className={styles.root}>
      <span>
        <ImLocation />
      </span>
    </div>
  );

  return (
    <div
      className="map"
      style={{
        position: 'absolute',
        right: '0',
        height: '218px',
        width: '410px',
        padding: '0',
      }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
        <AnyReactComponent lat={activeJob.latitude} lng={activeJob.longitude} />
      </GoogleMapReact>
    </div>
  );
}
