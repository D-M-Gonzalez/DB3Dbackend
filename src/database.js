import mongoose from "mongoose";
import config from "./config";

//connection to Atlas cloud based MongoDB

(async () => {
    try {
        const db = await mongoose.connect(config.mongodbURL)
        console.log('Database is connected to:', db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();