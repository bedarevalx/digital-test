import axios from '../axios';
export const reverseGeocode = (lat, lng) => {
  return new Promise(async (resolve, reject) => {
    const response = await axios.get(
      `geocoding/v5/mapbox.places/${lng},${lat}.json`,
    );
    resolve(response);
  });
};
