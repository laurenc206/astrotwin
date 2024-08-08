import express from 'express'
import cors from 'cors'
import axios from 'axios'
import dotenv from 'dotenv'
import helmet from "helmet"
import morgan from "morgan"

/* CONFIGURATIONS */
dotenv.config()
const app = express()
app.use(cors())

/* CONFIGURATIONS */
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin'}));
app.use(morgan("common"));

/* ROUTES */
app.post('/autocomplete', (req, res) => {
    const input = req.query.input;
    const sessionToken= req.query.sessionToken;
    const options = {
        method: 'POST',
        url: 'https://places.googleapis.com/v1/places:autocomplete',
        params: {
            input: input,
            sessionToken: sessionToken,
            includedPrimaryTypes: "(cities)",
        },
        headers: {
            contentType: "application/json",
            'x-goog-api-key': process.env.GOOGLE_MAPS_API_KEY,
        }
    }

    axios.request(options).then((response) => {
        res.json(response.data['suggestions'])
    }).catch((error) => {
        console.error(error)
    })
})

app.get("/place", (req, res) => {
    const place_id = req.query.placeId;
    const sessionToken = req.query.sessionToken;
    console.log("place id " + place_id)
    console.log("session: " + sessionToken)
    const options = {
        method: 'GET',
        url: `https://places.googleapis.com/v1/places/${place_id}`,
        params: {
            sessionToken: sessionToken,
        },
        headers: {
            contentType: "application/json",
            "x-goog-api-key": process.env.GOOGLE_MAPS_API_KEY,
            "x-goog-fieldmask": "addressComponents",
        }
    }

    axios.request(options).then((response) => {
        //console.log("response " + JSON.stringify(response))
        res.json(response.data)
    }).catch((error) => {
        console.error(error)
    })
})

/* SERVER */
const port = process.env.PROXY_PORT || 3001;
app.listen(port, "0.0.0.0", () => console.log(`Proxy backend is running on port ${port}`))