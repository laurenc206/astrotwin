import api from '../../api/axiosConfig'
import { Controller, useForm, handleSubmit} from 'react-hook-form'
import {TextField} from '@mui/material/'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCeleb = ({user, userChart, getMatchData, setVarsUpdated, matchData}) => {
    const { control, handleSubmit, formState: {isSubmitting}} = useForm()
    const [state, setState] = useState('');
    const navigate = useNavigate();

    
    const onSubmit = (data, e) => {
        setState('')

        api.post(`/api/v1/celeb/insertCeleb/${data.Name}`)
                          .then((celebResponse) => {
                            
                              setVarsUpdated(true)       
                              getMatchData(user?.chartId).then((matchResponse) => {
                                //console.log("match response from add celeb " + JSON.stringify(matchResponse.data))
                                navigate("/resultCeleb", {state: {celeb: celebResponse.data, user: user, userChart: userChart, matchData: matchResponse.data}})})
                          })
                          .catch((err) => {
                            console.log("error " + JSON.stringify(err))
                            setState(err.code);
                          });
    };
    
    
    return (
        <>
<div className="w-layout-blockcontainer utility-page-wrap w-container">
    <div className="w-layout-blockcontainer w-container">
      <div className="w-layout-blockcontainer admin-form-card w-container">
        <div className="w-layout-blockcontainer w-container">
          <div className="w-form">
          <form id="email-form" onSubmit={handleSubmit(onSubmit)} control={control}>
              <div className="w-layout-blockcontainer w-container">
                <h2 className="heading-7">Insert Celebrity Chart</h2>
                <p className="paragraph small">
                <a href="https://www.astro.com/astro-databank/Main_Page" >AstroDatabank</a> is used to verify birth information. For best results, enter name as found at AstroDatabank. If celebrity is not found in our database but birth information can be retrieved, use add celebrity to enter into our system.</p>
              </div>
              <Controller 
                    control={control}
                    name="Name"
                    rules={{ required: "Name is required" }}
                    render={({ field: {onChange, onBlur, value, ref} }) => (
                    <TextField                    
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value}
                        size="small"
                        className="text-field w-input"
                        
                        />
                    )}
                />
            <div className="spacer _16"></div>  
              <div id="w-node-_4216035e-6416-4b70-dd03-3e292dc9f2f6-cc44b97c" className="w-layout-layout quick-stack-18 wf-layout-layout">
                <div id="w-node-bc7dc6ea-5844-85ac-2c94-664ddcd62d67-cc44b97c" className="w-layout-cell cell-14"><input type="submit" value="Submit" data-wait="Please wait..." className="button w-button" disabled={isSubmitting}/></div>
              </div>
            </form>
            {state === "ERR_BAD_REQUEST" &&
            (
              <div className="container w-form-fail">Unable to find celebrity birth infomation
              </div>
            )}
            {state === "ERR_NETWORK" &&
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
        </>
    );
};

export default AddCeleb;
