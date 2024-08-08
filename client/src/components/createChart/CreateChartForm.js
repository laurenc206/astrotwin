import { Controller, useForm } from 'react-hook-form'
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

const CreateChartForm = ({createUser, user}) => { 
    const { control, handleSubmit, formState: {isSubmitting, errors}} = useForm()
    const [dbError, setDbError] = useState()
    const [dateError, setDateError] = useState()
    const [submitting, setSubmitting] = useState(false)
    const [sessionToken, setSessionToken] = useState("")
    const [formData, setFormData] = useState() 
    const [locationMap, setLocationMap] = useState()
    
    const onSubmit = (data, e) => {
        setSubmitting(true)
        setFormData(data)
        console.log("onSubmit " + data)
    };


    const onError = (e) => {
        console.log("e " + JSON.stringify(e))
        console.log("errors " + JSON.stringify(errors))   
    }


    const fetchPlace = async (placeId, sessionToken) => {
        console.log("fetchPlace " + placeId)
        console.log("session Token " + sessionToken)
        const options = {
            method: 'GET',
            url: `${process.env.React_app_PROXY_URL}/place`,
            params: {
                placeId: placeId,
                sessionToken: sessionToken
            }
        }
        
        await axios.request(options).then((response) => {
            const data = response.data
            console.log("data " + JSON.stringify(data))
            
            var locationMap = {};
            data.addressComponents.map((adr) => {
                const type = adr.types[0]
                const longText = adr.longText
                const shortText = adr.shortText
                locationMap[type] = {longText, shortText}
            })
            setLocationMap(locationMap)

        }).catch((error) => {
            console.error(error)
        })   
    }

    useEffect(() => {
        if (!sessionToken) {
            setSessionToken(uuidv4());
        }
    }, [sessionToken])

    useEffect(() => {  
        async function getLocation() {
            if (formData) {
                fetchPlace(formData.Location.id, sessionToken)
            }
        }
        
        getLocation();   
    }, [formData])

    useEffect(() => {
        if (locationMap) {
            console.log('location map ' + JSON.stringify(locationMap))
            const userData = {}
            userData['Name'] = formData['Name']
            userData['Date'] = formData['Date']
            userData['Location'] = {
                town: locationMap['locality']['longText'],
                longRegion: locationMap['administrative_area_level_1']['longText'],
                shortRegion: locationMap['administrative_area_level_1']['shortText'],
                longCountry: locationMap['country']['longText'],
                shortCountry: locationMap['country']['shortText']
            }
            console.log("user data " + JSON.stringify(userData))

            createUser(userData).catch((err)=> {
                   console.log("createchart database not avaliable")
                    console.log(err);
                    setDbError("Database not avaliable")
            })
        }

        return () => {
            setSessionToken("")
            setSubmitting(false)
        }

    }, [locationMap])

    return (
      <>
        <form className="wf-form-Create-Chart-Form" method="post" onSubmit={handleSubmit(onSubmit, onError)} control={control}>
            
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
                    name="Date"
                    rules={{ required: "Birth Date is required" }}
                    
                    render={({ field: {onChange, onBlur, value, ref}, formState: {errors} }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker    
                      
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

            <input type="submit" value="Find Celebrity AstroTwin" className="button w-button" disabled={submitting}/>

            </div>

        </form>
        {dbError && (<ErrorMsg error={dbError}/>)}
       </>
    );
};

export default CreateChartForm;
