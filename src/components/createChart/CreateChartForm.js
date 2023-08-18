
import PlacesAutocomplete from './PlacesAutoComplete';
import { Controller, useForm } from 'react-hook-form'
import { TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import { useState } from 'react';
import ErrorMsg from './ErrorMsg';


const CreateChartForm = ({createUser, user}) => {
    
    const { control, handleSubmit, formState: {isSubmitting, errors}} = useForm()
    const [dbError, setDbError] = useState()
    const [dateError, setDateError] = useState()
    


    const onSubmit = (data, e) => {
        console.log(data)
        createUser(data)
        
        .catch((err)=> {
            console.log("createchart database not avaliable")
            console.log(err);
            setDbError("Database not avaliable")
        })
    };


    const onError = (e) => {
        console.log("e " + JSON.stringify(e))
        console.log("errors " + JSON.stringify(errors))   
    }


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
                <PlacesAutocomplete name="Location" control={control} errors={errors}/>

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

            <input type="submit" value="Find Celebrity AstroTwin" className="button w-button" disabled={isSubmitting}/>

            </div>

        </form>
        {dbError && (<ErrorMsg error={dbError}/>)}
       </>
    );
};

export default CreateChartForm;
