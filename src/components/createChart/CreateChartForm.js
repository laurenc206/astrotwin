
import PlacesAutocomplete from './PlacesAutoComplete';
import { Controller, useForm } from 'react-hook-form'
import { TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import { useState } from 'react';
import ErrorMsg from './ErrorMsg';


const CreateChartForm = ({createUser, user}) => {
    
    const { control, handleSubmit, formState: {isSubmitting}} = useForm()
    const [dbError, setDbError] = useState()
    const [formErrors, setFormErrors] = useState()


    const onSubmit = (data, e) => {
        console.log(data)
        createUser(data)
        
        .catch((err)=> {
            console.log("createchart database not avaliable")
            console.log(err);
            setDbError("Database not avaliable")
        })
    };
    const onError = (formErrors, e) => {
        console.log(formErrors)
        setFormErrors(formErrors)
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
                        
                        />
                    )}
                />
            {formErrors?.Name?.type === 'required' && (<text className="text-required">*required</text>)}
            </div>
            
            <div className="field-block"><label htmlFor="Location">Birth Location: </label>
                <PlacesAutocomplete name="Location" control={control}/>
            {formErrors?.Location?.type === 'required' && (<text className="text-required">*required (if no exact location is avalible, select nearest avaliable city)</text>)}
            </div>

            <div className="field-block"><label htmlFor="Date">Birth Date:</label>
                
                <Controller
                    control={control}
                    name="Date"
                    rules={{ required: "Birth Date is required" }}
                    render={({ field: {onChange, onBlur, value, ref} }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker      
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        
                    />
                    </LocalizationProvider>
                    )}
                />

            {formErrors?.Date?.type === 'required' && (<text className="text-required">*required </text>)}
            <div className="spacer _16"></div>  

            <input type="submit" value="Find Celebrity AstroTwin" className="button w-button" disabled={isSubmitting}/>

            </div>

        </form>
        {dbError && (<ErrorMsg error={dbError}/>)}
       </>
    );
};

export default CreateChartForm;
