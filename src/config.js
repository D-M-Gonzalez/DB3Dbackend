import {config} from 'dotenv';
config();

//Enviroment variable to get into the DB, not used now
export default {
    mongodbURL: process.env.MONGODB_URI,
    apiKey: process.env.FB_APIKEY,
    authDomain: process.env.FB_AUTH,
    projectId: process.env.FB_ID,
    storageBucket: process.env.FB_BUCKET,
    messagingSenderId: process.env.FB_SENDERID,
    appId: process.env.FB_APPID,
    measurementId: process.env.FB_MEASUREID,
}