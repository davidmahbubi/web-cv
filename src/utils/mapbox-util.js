/**
 * Generate the GeoJSON formatted option
 *
 * @param {Object} options
 */
export const generateGeoJson = options => {
  let geoJsonFeatures = [];
  for (const option of options) {
    geoJsonFeatures.push({
      type: 'Feature',
      properties: {},
      geometry: {
        type: option.type || 'Point',
        coordinates: [option.long, option.lat]
      }
    });
  }
  return {
    type: 'FeatureCollection',
    features: geoJsonFeatures
  };
};

/**
 * Generate the Mapbox Option
 *
 * @param {Object} options
 */
export const generateMapboxOption = ({ mapStyle, accessToken, center }) => {
  return {
    container: 'map-here',
    style: mapStyle,
    accessToken: accessToken,
    trackResize: false,
    antialias: true,
    zoom: 9,
    center: center
  };
};
