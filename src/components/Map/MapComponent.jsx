import React from 'react';
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Geocoder from './Geocoder/Geocoder';
import { useDispatch, useSelector } from 'react-redux';
import { moveMarker } from '../../redux/action/mapActions';
import { reverseGeocode } from '../../api/mapApi';
import PopupReverseGeocoding from './PopupReverseGeocoding';
import PopupAddressInfo from './PopupAddressInfo';

const INITIAL_MAP_STATE = {
  lng: 83.73173,
  lat: 53.36927,
  zoom: 14,
};

const MapComponent = () => {
  const dispatch = useDispatch();
  const { searchMarker } = useSelector((store) => store.map);
  const { searchHistory } = useSelector((store) => store.search);

  const mapRef = React.useRef();
  const [isPopupGeocodingVisible, setIsPopupGeocodingVisible] =
    React.useState(false);
  const [findedAddress, setFindedAddresses] = React.useState({});
  const [popupGeocodingPosition, setPopupGeocodingPosition] = React.useState({
    lat: INITIAL_MAP_STATE.lat,
    lng: INITIAL_MAP_STATE.lng,
  });
  const [isPopupInfoVisible, setIsPopupInfoVisible] = React.useState(false);
  const [popupInfoProperties, setPopupInfoProperties] = React.useState({});

  const onChangeMarkerPosition = async (coords) => {
    const res = await reverseGeocode(coords.lat, coords.lng);
    setFindedAddresses(
      res.data.features.filter(
        (feature) => feature.place_type[0] === 'address',
      )[0],
    );
    setPopupGeocodingPosition({
      lng: coords.lng,
      lat: coords.lat,
    });
    dispatch(moveMarker(coords.lat, coords.lng));
    setIsPopupGeocodingVisible(true);
  };

  const onInfoMarkerClick = (marker) => {
    mapRef.current.flyTo({ center: [marker.lat, marker.lng], zoom: 16 });
    setPopupInfoProperties({
      address: marker.name,
      lat: marker.lng,
      lng: marker.lat,
    });
    setIsPopupInfoVisible(true);
  };

  const handleHidePopups = () => {
    setIsPopupInfoVisible(false);
    setIsPopupGeocodingVisible(false);
  };

  return (
    <ReactMapGL
      ref={mapRef}
      style={{ height: '95vh' }}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      initialViewState={{
        longitude: INITIAL_MAP_STATE.lng,
        latitude: INITIAL_MAP_STATE.lat,
        zoom: INITIAL_MAP_STATE.zoom,
      }}
      mapStyle='mapbox://styles/mapbox/streets-v11'>
      {searchMarker.isVisible && (
        <Marker
          latitude={searchMarker.lat}
          draggable
          longitude={searchMarker.lng}
          onDragEnd={(e) => onChangeMarkerPosition(e.lngLat)}></Marker>
      )}
      {searchHistory?.map(
        (marker, id) =>
          marker.toggled && (
            <Marker
              key={id}
              color='#FF0000'
              latitude={marker.lng}
              longitude={marker.lat}
              onClick={() => onInfoMarkerClick(marker)}></Marker>
          ),
      )}
      {isPopupGeocodingVisible && (
        <Popup
          latitude={popupGeocodingPosition.lat}
          longitude={popupGeocodingPosition.lng}
          closeButton={false}
          closeOnClick={false}
          onClose={() => setIsPopupGeocodingVisible(false)}
          anchor='top'>
          <>
            <PopupReverseGeocoding
              address={findedAddress}
              setIsPopupVisible={
                setIsPopupGeocodingVisible
              }></PopupReverseGeocoding>
          </>
        </Popup>
      )}
      {isPopupInfoVisible && (
        <Popup
          latitude={popupInfoProperties.lat}
          longitude={popupInfoProperties.lng}
          closeButton={false}
          closeOnClick={false}
          onClose={() => setIsPopupGeocodingVisible(false)}
          anchor='top'>
          <>
            <PopupAddressInfo
              address={popupInfoProperties.address}
              setIsPopupVisible={setIsPopupInfoVisible}></PopupAddressInfo>
          </>
        </Popup>
      )}
      <Geocoder hidePopups={handleHidePopups}></Geocoder>
      <NavigationControl position={'bottom-right'}></NavigationControl>
    </ReactMapGL>
  );
};

export default MapComponent;
