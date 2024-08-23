import { Controller, useForm } from 'react-hook-form'
import { TextField } from '@mui/material';
import { useState } from 'react';
import api from '../../api/axiosConfig';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const {handleSubmit, control, formState: {isSubmitting, errors}} = useForm()
    const [formStatus, setFormStatus] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false);

    const serviceId = "service_ddfrj6s";
    const templateId = "template_a11pjna";
    const publicKey = "JcUurtGC";
    

    const onSubmit = async (data) => {
        setFormStatus('')
        setErrorMessage('')
        setLoading(true);


        const templateParams = {
          from_name: data.firstName + " " + data.lastName, 
          from_email: data.email,
          to_name: "Lauren",
          to_email: "cavanaugh.lc@gmail.com",
          message: data.message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey).
          then(() => {
            setFormStatus("Success");

          }, (err) => {
            setFormStatus("Error");
            setErrorMessage("Oops! Something went wrong. Please fill in the required fields and try again.");
            console.error(err);
            
          
          }).catch((err) => {
            setFormStatus("Error");
            setErrorMessage("Unable to connect to email service.");
            console.error(err);

          }).finally(() => {
            setLoading(false)
          });

        //try {   
        //    const response = await api.post("api/v1/user/contactMe", form) 
        //    setFormStatus(response.data)

        //    if (formStatus != "Success") {
        //        setErrorMessage("Oops! Something went wrong. Please fill in the required fields and try again.")
        //    }

        //} catch (err) {
        //    console.error(err)
        //    setFormStatus(err.code)
        //    if (formStatus === "ERR_NETWORK") {
        //        setErrorMessage("Unable to connect to data service.")
        //    } else {
        //        setErrorMessage("Oops! Something went wrong. Please fill in the required fields and try again.")
        //    }
        //}
       
    };

    const onError = (e) => {
        console.error("onError " + JSON.stringify(e))
    }

    return (
        <>
<div className="page-wrapper">
    <div className="section black-gradient wf-section">
      <div className="container">
        <div id="w-node-b49c48ad-b3b4-f319-67e3-9d04be5835dc-52bb701f" className="text-box _550px center-align">
          <div className="title-tag">CONTACT</div>
          <h1 className="heading h1">Have Feedback?</h1>
          <p className="paragraph medium">I hope you had fun exploring my site and discovering your celebrity AstroTwin. Please reach out below with any comments and questions. Thanks for visitng!</p>
          <div className="spacer _32"></div>
          <div className="form-card">
            <div className="form w-form">
            {formStatus != "Success" &&
              <form id="email-form" className="form" onSubmit={handleSubmit(onSubmit, onError)} control={control}>
                <div className="w-layout-grid form-2-grid">

                  <div className="field-block"><label>First name*</label>
                  <Controller 
                    control={control}
                    name="firstName"
                    rules={{ required: "*required" }}
                    
                    render={({ field: {onChange, onBlur, value} }) => (
                    <TextField                    
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value}
                        maxLength="256"
                        placeholder='Your first name'
                        error={errors.firstName ? true : false}
                        size="small"
                        className="text-field w-input"

                        />
                    )}
                   />
                    {errors.firstName && (<div className='errorHelperText'>required</div>)}
                  
                  </div>
                  <div className="field-block"><label>Last name*</label>
                  <Controller 
                    control={control}
                    name="lastName"
                    rules={{ required: "*required" }}
                    render={({ field: {onChange, onBlur, value} }) => (
                    <TextField                    
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value}
                        maxLength="256"
                        placeholder='Your last name'
                        error={errors.lastName ? true : false}
                        size="small"
                        className="text-field w-input"
                        />
                    )}
                   />
                    {errors.lastName  && (<div className='errorHelperText'>required</div>)}
                  
                  </div>
                </div>
                
                <div className="field-block"><label>Email* </label>
                <Controller 
                    control={control}
                    name="email"
                    rules={{ required: "*required",
                             pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                      }}}
                    render={({ field: {onChange, onBlur, value} }) => (
                    <TextField                    
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value}
                        maxLength="256"
                        placeholder='example@email.com'
                        error={errors.email ? true : false}
                        className="text-field w-input"
                        size="small"

                        />
                    )}
                />
                {errors.email  && (<div className='errorHelperText'>valid email required</div>)}
                </div>


                <div className="field-block"><label>Your Message*</label>
                <Controller 
                    control={control}
                    name="message"
                    rules={{ required: "*required"}}
                    render={({ field: {onChange, onBlur, value} }) => (
                    <TextField                    
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value}
                        maxLength="5000"
                        placeholder='Enter message here'
                        multiline
                        rows={4}
                        error={errors.message ? true : false}
                        size="small"
                        className="text-field w-input"
                        />
                    )}
                />
                {errors.message  && (<div className='errorHelperText'>required</div>)}
                
                <div className="spacer _16"></div>  
                
                <div id="w-node-bc7dc6ea-5844-85ac-2c94-664ddcd62d67-96dc377f" className="w-layout-cell cell-14">
                    <input type="submit" value="Send Message" className="button no-margin w-button" disabled={loading}/>
                </div>
                
                </div>
              </form>
            }

            {formStatus === "Success" &&
            (   
                <div className="w-layout-cell w-form-done">
                    Your feedback has been recieved. Thank you!
                </div>
            )}

            {formStatus != "" && formStatus != "Success" &&
            (
              <div className="container w-form-fail">
                {errorMessage}<br/><br/>
                If error continues please email me directly at cavanaugh.lc@gmail.com
              </div>
            )}

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    );
};

export default ContactMe;
