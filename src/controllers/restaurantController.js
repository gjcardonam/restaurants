import { restaurantService } from "../services/restaurantService.js";

const restaurantController = async (req, res) => {
    const coordinateX = parseFloat(req.params.coordinateX);
    const coordinateY = parseFloat(req.params.coordinateY);

    try {
        const restaurants = await restaurantService(coordinateX, coordinateY);
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ error: "Error looking for restaurants"})
    }
    
}

export { restaurantController }