import api from '../../api/axiosConfig'
import { Controller, useForm } from 'react-hook-form'
import {CircularProgress, TextField} from '@mui/material/'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Autocomplete from "@mui/material/Autocomplete";

const SearchCeleb = ({ celebList }) => {
    const { control, handleSubmit, formState: {isSubmitting}} = useForm()
    const [errorState, setErrorState] = useState('');
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;
    //const [celebData, setCelebData] = useState([]);

   // useEffect(() => {
   //     api.get('/api/v1/celeb/search/findAll').then((res) => {
   //         setCelebData(res.data)
   //         setOptions(res.data)
             
   //     }).catch((err) => {
   //       console.log("error " + err);
   //       setErrorState(err.code)
   //     })
   // }, [])
   useEffect(() => {
    if (celebList.length === 0) {
      setErrorState("ERR_NETWORK")
    } else {
      setErrorState("")
    }
   }, [celebList])

    useEffect(() => {
      let active = true;
      if (!loading) {
        return undefined;
      }
    
      
      if (active) {
        
        console.log("set options ")
        setOptions(celebList)    
        console.log("options " + JSON.stringify(options))
        
        
        //console.log("celeb data " + JSON.stringify(celebData))
      }
     
    
      return () => {
        active = false;
      };

    }, [loading]);
    
    useEffect(() => {
        if (!open) {
          setOptions([]);
        }
    }, [open]);
    


    const onSubmit = (data, e) => {
        setErrorState('')
        navigate(`/resultCeleb/${data.Name}`)
        //api.get(`/api/v1/celeb/search/${data.Name}`)
        //                  .then((res) => {
        //                    const celeb = res.data
        //                    navigate("/resultCeleb", {state: {celeb : celeb }})
        //                  })
        //                  .catch((err) => {
        //                    console.log("error " + JSON.stringify(err))
        //                    setErrorState(err.code);
        //                  });
    };

    
    
    
    return (
        <div className="w-layout-blockcontainer utility-page-wrap w-container">
    <div className="w-layout-blockcontainer w-container">
      <div className="w-layout-blockcontainer admin-form-card w-container">
        <div className="w-layout-blockcontainer w-container">
          <div className="w-form">
            <form id="email-form" name="email-form" onSubmit={handleSubmit(onSubmit)} control={control}>
              
              
              <div className="w-layout-blockcontainer w-container">
                <h2 className="heading-7">Search Celebrity Charts</h2>
                <p className="paragraph small">
                    <a href="https://www.astro.com/astro-databank/Main_Page" >AstroDatabank</a> is used to verify birth information. For best results, enter name as found at AstroDatabank. If celebrity is not found in our database but birth information can be retrieved, use add celebrity to enter into our system.</p>
              
                         
              <Controller 
                    control={control}
                    name="Name"
                    rules={{ required: "Name is required" }}
                    onChange={([, data]) => data}
                    render={({ field : {onChange, ...props}}) => (
                        

                    <Autocomplete
                        id="search-celeb"
                        open={open}
                        onOpen={() => {
                            setOpen(true);
                        }}
                        onClose={() => {
                            setOpen(false);
                        }}
                        isOptionEqualToValue={(option, value) => option.name === value.name}
                        //getOptionLabel={(option) => option.name}
                        options={options}
                        loading={loading}
                        onChange={(e, data) => onChange(data)}
                        {...props}
                        value={props.value || null}

                        renderInput={(params, field) => (
                            <TextField   
                                {...params}   
                                size="small"
                                className="text-field w-input"
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <React.Fragment>
                                            {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                            {params.InputProps.endAdornment}
                                        </React.Fragment>
                                    )
                                }}  
                            />
                        )}
                    />
                        
                        
                    )}
                />
              </div>
              <div className="spacer _16"></div>  
              <div id="w-node-_4216035e-6416-4b70-dd03-3e292dc9f2f6-96dc377f" className="w-layout-layout quick-stack-18 wf-layout-layout">
                <div id="w-node-bc7dc6ea-5844-85ac-2c94-664ddcd62d67-96dc377f" className="w-layout-cell cell-14">
                    <input type="submit" value="Submit" data-wait="Please wait..." className="button w-button" disabled={isSubmitting || errorState}/></div>
              </div>
            </form>

            {errorState === "ERR_BAD_REQUEST" &&
            (
              <div className="container w-form-fail">Celebrity can&#x27;t be found as entered. <br/>
              <br/><center><Link to="/addCeleb" className="link-5">Add Celebrity</Link></center>
              </div>
            )}
            {errorState === "ERR_NETWORK" &&
            (
                <div className="w-layout-cell w-form-fail">
                    Unable to connect to data service
                </div>
            )}

          </div>
        </div>
      </div>
    </div>
    </div>
    );
};

export default SearchCeleb;
