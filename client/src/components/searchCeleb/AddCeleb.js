import api from '../../api/axiosConfig'
import { Controller, useForm, handleSubmit} from 'react-hook-form'
import {TextField} from '@mui/material/'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const insertCeleb = async (name) => {
  const response = await api.post(`/api/v1/celeb/insertCeleb/${name}`)
  return response;
}


const AddCeleb = ({ celebList, setCelebList }) => {
  const { control, reset,  handleSubmit, formState: {isSubmitted, isSubmitting, isDirty}} = useForm()
  const [errorState, setErrorState] = useState('');
  const navigate = useNavigate();
    
  const onSubmit = async (data, e) => {
    setErrorState('')
    const nameArr = data.Name.split(" ");
    const capNameArr = nameArr.map((w) => { return w[0].toUpperCase() + w.substr(1).toLowerCase()})
    const celebName = capNameArr.join(" ")
   

    if (!celebList.includes(celebName)) {
      insertCeleb(celebName).then((response) => {
        setCelebList(prevData => [...prevData, celebName])
        navigate(`/resultCeleb/${celebName}`)
      }).catch((e) => {
        setErrorState(e.code);
        reset({
          Name: data.Name
          }, {
          keepIsSubmitted: false, 
        })
      })
    } else {
      navigate(`/resultCeleb/${celebName}`)
    }
  }
    
  return (
        <>
<div className="w-layout-blockcontainer utility-page-wrap w-container">
    <div className="w-layout-blockcontainer w-container">
      <div className="w-layout-blockcontainer admin-form-card w-container">
        <div className="w-layout-blockcontainer w-container">
          <div className="w-form">
          <form id="email-form" onSubmit={handleSubmit(onSubmit)} control={control} >
              <div className="w-layout-blockcontainer w-container">
                <h2 className="heading-7">Insert Celebrity Chart</h2>
                <p className="paragraph small">
                <a href="https://www.astro.com/astro-databank/Main_Page" >AstroDatabank</a> is used to verify birth information. For best results, enter name as found at AstroDatabank. If celebrity is not found in our database but birth information can be retrieved, use add celebrity to enter into our system.</p>
              </div>
              <Controller 
                    control={control}
                    name="Name"
                    rules={{ required: "Name is required" }}
                    defaultValue=""
                    render={({ field }) => (
                    <TextField                    
                        {...field}
                        size="small"
                        className="text-field w-input"
                        />
                    )}
                />
            <div className="spacer _16"></div>  
              <div id="w-node-_4216035e-6416-4b70-dd03-3e292dc9f2f6-cc44b97c" className="w-layout-layout quick-stack-18 wf-layout-layout">
                <div id="w-node-bc7dc6ea-5844-85ac-2c94-664ddcd62d67-cc44b97c" className="w-layout-cell cell-14">
                    <input type="submit" value="Submit" className="button w-button" disabled={isSubmitted || isSubmitting}/></div>
              </div>
            </form>
            {(errorState === "ERR_BAD_REQUEST" && !isDirty) &&
            (
              <div className="container w-form-fail">Unable to find celebrity birth infomation
              </div>
            )}
            {(errorState === "ERR_NETWORK" && !isDirty)  &&
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
