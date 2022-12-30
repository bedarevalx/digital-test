import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { useControl } from 'react-map-gl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { useDispatch } from 'react-redux';
import { moveMarker } from '../../../redux/action/mapActions';
import { addSearchHistory } from '../../../redux/action/searchActions';
import { disableAllSearches } from '../../../redux/action/searchActions';
import './Geocoder.css';

const Geocoder = (props) => {
  const dispatch = useDispatch();
  const ctrl = new MapboxGeocoder({
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
  });
  useControl(() => ctrl);
  ctrl.on('result', (e) => {
    props.hidePopups();
    const marker = {
      isVisible: true,
      lat: e.result.geometry.coordinates[0],
      lng: e.result.geometry.coordinates[1],
    };
    const searchResult = {
      name: e.result['place_name_ru-RU'],
      lat: e.result.geometry.coordinates[0],
      lng: e.result.geometry.coordinates[1],
      toggled: false,
    };

    dispatch(moveMarker(marker.lng, marker.lat));
    dispatch(addSearchHistory(searchResult));
    dispatch(disableAllSearches());
  });
  return null;
};

export default Geocoder;
