import express from 'express'
import cors from 'cors'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())

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
//curl -X GET -H 'Content-Type: application/json' \
//-H "X-Goog-Api-Key: YOUR_API_KEY" \
//-H "X-Goog-FieldMask: id,displayName,accessibilityOptions,businessStatus" \
//https://places.googleapis.com/v1/places/ChIJ_QJSSfGAhYARQVFJBNKy3HE?sessionToken=3519edfe-0f75-4a30-bfe4-7cbd89340b2c
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



app.listen(process.env.PROXY_PORT, () => console.log(`Backend is running on port ${process.env.PROXY_PORT}`))
