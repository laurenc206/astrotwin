import { Controller, useForm, Form } from 'react-hook-form'
import { TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import axios from 'axios';


import ErrorMsg from './ErrorMsg';
import GoogleAutoComplete from './GoogleAutoComplete';

import tzlookup from 'tz-lookup';
import moment from 'moment-timezone';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import api from '../../api/axiosConfig';
import { DateTime } from "luxon";

const fetchLocation = async (place, sessionToken) => {
    const options = {
        method: 'GET',
        url: `${process.env.React_app_PROXY_URL}/place`,
        params: {
            placeId: place.id,
            sessionToken: sessionToken
        }
    }

    const location = await axios.request(options)
    return location;
}

const createUser = async (formData, locationData) => {
    const lat = parseFloat(locationData.lat);
    const lng = parseFloat(locationData.lng);
    const tz = tzlookup(lat, lng);

    
    const bday_input = moment.utc(new Date(formData['Birthday']))
    const bday_input_utc = DateTime.fromISO(bday_input.toISOString(), { zone: 'utc' })
    const bday_local = bday_input_utc.setZone(tz, { keepLocalTime: true })
    const bday_utc = DateTime.fromISO(bday_local.toISO(), { zone: 'utc' })
    
    const userForm = {}
    userForm['name'] = formData['Name']
    userForm['location'] = {
        text: locationData.text,
        lat: lat,
        lng: lng * -1
    }
    userForm['birthday'] = bday_local.toISO({ includeOffset: false });
    userForm['birthday_UTC'] = bday_utc.toISO({ includeOffset: false });
    console.log("user form " + JSON.stringify(userForm))
    const response = await api.post("api/v1/user", userForm);
    return response;
}

const CreateChartForm = ({setUser, setUserChart}) => { 
    const { control, handleSubmit, formState: {isSubmitting, errors}} = useForm()
    const [dbError, setDbError] = useState()
    const [dateError, setDateError] = useState()
    const [sessionToken, setSessionToken] = useState("")
  
    const submitHandler = (formData) => {
        console.log("data " + JSON.stringify(formData))
       
        fetchLocation(formData.Location, sessionToken).then((response) => {
            console.log(sessionToken)
            const data = response.data
            const location = {
                'text': formData.Location.text,
                'lat': data.location.latitude,
                'lng': data.location.longitude
            }
            console.log(location)

            createUser(formData, location).then((response) => {
                const userData = response.data
                const chartData = new Map(response.data.userChart.chart.map(i => [i.planet, [i.zodiac, i.element, i.mode, i.house]]))
                setUser(userData)
                setUserChart(chartData)
            }).catch((e) => {
                console.log(e)
                setDbError("Database Error")
            })

        }).catch((e) => {
            console.log(e)
            setDbError("Location Error")
        }).finally(
            setSessionToken("")
        )
    };

    const errorHandler = (e) => {
        console.log("e " + JSON.stringify(e))
        console.log("errors " + JSON.stringify(errors))   
    }

    useEffect(() => {
        if (!sessionToken) {
            setSessionToken(uuidv4());
        }
    })

    return (
      <>
        <form className="wf-form-Create-Chart-Form" onSubmit={handleSubmit(submitHandler, errorHandler)} control={control}>
            
            <div className="field-block"><label htmlFor="Name">Name:</label>
         
                <Controller 
                    control={control}
                    name="Name"
                    rules={{ required: "Name is required" }}
                    render={({ field: {onChange, onBlur, value, ref} }) => (
                    <TextField                   
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value}
                        error={errors.Name ? true : false}
                        size="small"
                        className="text-field w-input"
                        />
                        
                    )}
                />
                {errors.Name  && (<div className='errorHelperText'>required</div>)}
            
            </div>
            
            <div className="field-block"><label htmlFor="Location">Birth Location: </label>     
                <GoogleAutoComplete name="Location" control={control} errors={errors} sessionToken={sessionToken}/> 
            
               
            </div>

            <div className="field-block"><label htmlFor="Date">Birth Date:</label>
                
                <Controller
                    control={control}
                    name="Birthday"
                    rules={{ required: "Birth Date is required" }}
                    
                    render={({ field: {onChange, onBlur, value, ref}, formState: {errors} }) => (
                    
                        <LocalizationProvider dateAdapter={AdapterMoment} dateLibInstance={moment}>
                        <DateTimePicker    
                            timezone='utc'
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            onError={(newError)=> setDateError(newError)}
                            slotProps={{
                                textField: {
                                    error: errors.Date || dateError ? true : false,
                                    size: "small",
                                    className: "text-field w-input"
                                    
                                }
                                
                            }}
                        />
                        </LocalizationProvider>
                    
                    
                  
                    )}
                />
                {errors.Date  && (<div className='errorHelperText'>required</div>)}
                {dateError  && (<div className='errorHelperText'>Invalid date</div>)}
           
            <div className="spacer _16"></div>  

            <input type="submit" value="Find Celebrity AstroTwin" className="button w-button" disabled={isSubmitting}/>

            </div>

        </form>
        {dbError && (<ErrorMsg error={dbError}/>)}
       </>
    );
};

export default CreateChartForm;
