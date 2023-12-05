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
        return response.data.elements;
    } catch (error) {
        throw error;
    }
}

export { restaurantService }