import { Controller } from 'react-hook-form'
import { Slider } from '@mui/material';


const SlideVal = ({control, name, initVal}) => {

    const CustomSliderStyles = {
        '& .MuiSlider-thumb': {
            color: "#626a72",
        },
        '& .MuiSlider-track': {
            color: "#626a72"
        },
        '& .MuiSlider-rail': {
            color: "#99a4af"
        },
        '& .MuiSlider-active': {
            color: "pink"
        }
        
    };


    return (
    <>

    <div id="w-node-_949f8a09-c801-4d94-6a9c-b7c17398c2dc-781602ad" className="w-layout-cell">
              <Controller 
                    control={control}
                    name={name}
                    defaultValue={initVal}
                    render={({ field: {onChange, onBlur, value, ref} }) => (
                        <>
                        <label htmlFor="name">{`${name}: ${value}`}</label>
                        <Slider max={10.0} min={0} defaultValue={initVal} step={.1} valueLabelDisplay="auto" size="small" onChange={onChange} value={value} sx={CustomSliderStyles}/>
                        </>
                    )}
                />
    </div>
    </>
    );
};

export default SlideVal;
