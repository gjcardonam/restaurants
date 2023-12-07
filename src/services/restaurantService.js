import axios from 'axios';

async function restaurantService(latitude, longitude){

    const radius = 500;
    
    const url = `https://overpass-api.de/api/interpreter`;

    const requestBody = {
        data: `
        [out:json];
        (
            node["amenity"="restaurant"](around:${radius},${latitude},${longitude});
            way["amenity"="restaurant"](around:${radius},${latitude},${longitude});
        );
        out geom;
        `
    };
  
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    try {
        const response = await axios.post(url, requestBody, { headers });
        const restaurantsOVP = response.data.elements;
        
        const restaurants = restaurantsOVP.map(restaurant => {
            if (restaurant.tags.name) {
              return {
                name: restaurant.tags.name,
                lat: restaurant.lat,
                lon: restaurant.lon
              };
            } else {
                return {
                  name: "Nombre no registrado",
                  lat: restaurant.lat,
                  lon: restaurant.lon
                };
              }
          });
        return restaurants;
    } catch (error) {
        throw error;
    }
}

export { restaurantService }