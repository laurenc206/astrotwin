import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import throttle from "lodash/throttle";
//import getAddress from "./api/getAddress";
import {Controller} from 'react-hook-form'
import api from '../../api/axiosConfig';


const PlacesAutocomplete = ({control, name, errors, field, ...rest}) => {
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState([]);
  const [networkError, setNetworkError] = React.useState(false);


  const fetch = React.useMemo(
    () => 
      throttle(async (request) => { 
        console.log(`request ${request}`)
        if (request) {
            console.log(`api request ` + JSON.stringify(request))
            api.get(`/api/v1/user/getCities/${request.input}`)
            .then((res) => {
            console.log(res.data) 
            setOptions(res.data.geonames)
            return res.data.geonames
            })
            .catch((err) => {
              console.log(err)
              setNetworkError(true)
            })
        }
      }, 200),
    []
  );

  React.useEffect(() => {
    let active = true;
    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = [];
        if (value) {
          newOptions = [value];
        }
       if (results) {
          newOptions = [...newOptions, ...results];
        }
        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  return (
    <>
<Controller
    name={name}
    control={control}
    defaultValue=""
    rules={{ required: "Birth location is required (if exact city is not listed, select closest city avaliable)" }}
    render={({ field, ...props }) => (
    <Autocomplete
          {...field}
          
          id="Location"
          getOptionLabel={(option) =>
            typeof option === "string" ? option : `${option.name}, ${option.adminName1}, ${option.countryName}`
          }
          isOptionEqualToValue={(option, value) => option.geonameId === value.geonameId}
          filterOptions={(x) => x}
          options={options}
          autoComplete
          includeInputInList
          filterSelectedOptions
          value={value} 
          //value={value}
          onChange={(event, newValue) => {
            setOptions(newValue ? [newValue, ...options] : options);
            setValue(newValue);
            console.log(`onchange ${event}`)
            // Actually change the state of react-hook-forms
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
              fullWidth 
              error={networkError || errors.Location ? true : false}
              size= "small"
              className="text-field w-input"
              />
          )}
          
          renderOption={console.log(options)}
    />
    )}
/>
{errors.Location  && (<div className='errorHelperText'>required (if no exact location is avalible, select nearest avaliable city)</div>)}
      </>  

  );
};

  
export default PlacesAutocomplete;
