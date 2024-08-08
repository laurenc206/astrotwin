import { useState, useEffect, useMemo } from "react";
import { TextField } from "@mui/material";
import AutoComplete from "@mui/material/Autocomplete";
import axios from "axios";
import throttle from "lodash/throttle";
import {Controller} from 'react-hook-form'

const GoogleAutoComplete = ({control, name, errors, field, sessionToken, ...rest}) => {
    const [value, setValue] = useState(undefined);
    const [inputValue, setInputValue] = useState("")
    const [options, setOptions] = useState([]);
    const [networkError, setNetworkError] = useState(false)

    const onSubmit= () => {
        // when complete, erase session token so each time page refreshes new session token is restarted
        // a new session token needs to be generated with the call of places api 
    }

    const fetch = useMemo(
        () => throttle(async (request) => {
            if (request?.input) {          
                const options = {
                    method: 'POST',
                    url: `${process.env.React_app_PROXY_URL}/autocomplete`,
                    params: {
                        input: request.input,
                        sessionToken: sessionToken,          
                    }
                }
                axios.request(options).then((response) => {
                    const data = response.data
        
                    const data_options = data?.map((place) => {
                        const id = place.placePrediction.placeId
                        const text = place.placePrediction.text.text
                        return {id, text}    
                    })
                    console.log(JSON.stringify(data_options))
        
                    setOptions(data_options)
                    console.log("options " + JSON.stringify(data_options))
                }).catch((error) => {
                    console.error(error)
                    setNetworkError(true)
                })
            }
        })
    )

    useEffect(() => {
        let active = true;

        if (!inputValue) {
            setOptions(value ? [value]: [])
            return undefined;
        }

        fetch({ input: inputValue}, (results) => {
            if (active) {
                let newOptions = [];
                if (value) {
                    newOptions = [value];
                }

                if (results) {
                    newOptions = [...newOptions, ...results];
                }
                setOptions(newOptions)
            }
        }, [inputValue, fetch]);

        return () => {
            active = false;
        };
    }, [inputValue])

    
  return (
        <>  
        <Controller
            name={name}
            control={control}
            defaultValue=""
            rules={{ required: "Birth location is required (if exact city is not listed, select closest city avaliable)" }}
            render={({ field, ...props }) => (
                <AutoComplete 
                    {...field}
                    id="Location"
                    getOptionLabel={(option) => option.text}
                    isOptionEqualToValue={(option, value) => {
                        return option.id === value.id}}
                    //filterOptions={(x) => x}
                    options={options}
                    autoComplete
                    includeInputInList
                    //filterSelectedOptions
                    value={value}
                    noOptionsText="No locations"
                    onChange={(event, newValue) => {
                        setOptions(newValue ? [newValue, ...options]: options);
                        setValue(newValue)
                        field.onChange(newValue);
                    }}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    
                    renderInput={(params) => (
                        <TextField 
                            {...rest}
                            {...params} 
                            variant="outlined"
                            label="Add a location"
                            fullWidth 
                            error={networkError || errors.Location ? true : false}
                            size="small"
                            className="text-field w-input"
                        />
                    )}

                
                />
                )}
            />
            {errors.Location  && (<div className='errorHelperText'>required (if no exact location is avalible, select nearest avaliable city)</div>)}
            </>
  )
}

export default GoogleAutoComplete;