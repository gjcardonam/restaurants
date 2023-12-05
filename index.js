import express from "express";
import cors from "cors";
import { restaurantRouter } from "./src/routes/restaurantsRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(restaurantRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Connected on port ${PORT}`))