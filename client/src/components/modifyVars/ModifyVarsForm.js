import { useForm } from 'react-hook-form'
import { useEffect, useState } from "react";
import SlideVal from "./SlideVal";


const ModifyVarsForm = ({vars, setVars, setVarsUpdated, initVars}) => {
  console.log("modify vars form" + JSON.stringify(vars))

  const [varsObj, setVarsObj] = useState()
  const { control, handleSubmit, reset, formState: {isSubmitted, isDirty}} = useForm()
  
  useEffect(() => {
    setVarsObj(Object.entries(vars))
  },[])
  

  const onSubmit = (data) => {
    console.log("submit")
    console.log(data)
    setVars(data)
    setVarsUpdated(true)
    reset(data)
  };

  const onReset = (e) => {
    e.preventDefault()
    setVars(initVars)
    setVarsObj(Object.entries(vars))
    setVarsUpdated(true)
    reset(initVars)
    console.log("Reset " + JSON.stringify(vars))
  }
console.log("isSubmitted" + isSubmitted)
console.log("isDirty " + isDirty)
  return (
   <div className="terms-card">
      <div className="text-box centered">
        <h1 className="no-margin">Modify Match Variables</h1>
        <div className="spacer _16"></div>
        <p className="paragraph">Matches are calculated by adding up each planet that matches the user&#x27;s chart and celebs chart. <br/><br/>Each planet is assigned a value. The higher a planets multiplier, the more weight is given to that match.<br/><br/>Planets can match as being the same zodiac, mode OR element. Since zodiac matches are also considered mode and element matches, it is recommended to keep mode and element variables less than zodiac.<br/><br/>Finally, planets that share the same component (zodiac, mode or element) get additional points for being in the same house. Thus matches are ranked by summing over (planetMultiplier * componentMultiplier * houseMultiplier) for each planet in both charts. <br/><br/>Use this menu to update the importance placed on specific chart components or planets.</p>
      </div>
      <div className="w-form">
        <form id="email-form" control={control} onSubmit={handleSubmit(onSubmit)}>
          <br></br>
          <h3>Planet Values</h3>
          <p><small>Inner planets (shorter orbits, direct influence on personality)</small> </p>
          <div id="w-node-_949f8a09-c801-4d94-6a9c-b7c17398c2db-781602ad" className="w-layout-layout quick-stack-16 wf-layout-layout">
          
              {varsObj?.slice(0,6).map((v, i) =>
                <SlideVal key={i} control={control} name={v[0]} initVal={v[1]} />
              )} 
          </div>
          <br></br>
          <p><small>Social planets (orbits coincide with major milestones)</small></p>
          <div id="w-node-_949f8a09-c801-4d94-6a9c-b7c17398c2db-781602ad" className="w-layout-layout quick-stack-16 wf-layout-layout">
          
          {varsObj?.slice(6,8).map((v, i) =>
            <SlideVal key={i} control={control} name={v[0]} initVal={v[1]} />
          )} 
          </div>
            <br></br>
          <p><small>Transpersonal planets (generational orbits)</small></p>
          <div id="w-node-_949f8a09-c801-4d94-6a9c-b7c17398c2db-781602ad" className="w-layout-layout quick-stack-16 wf-layout-layout">
          
          {varsObj?.slice(8,11).map((v, i)  =>
            <SlideVal key={i} control={control} name={v[0]} initVal={v[1]} />
          )} 
          </div>
          <br></br><br></br>
            <h3>Match Type</h3>
            <div id="w-node-f5e8a229-355b-48df-57fd-a9c5d4fffee4-781602ad" className="w-layout-layout quick-stack-16 wf-layout-layout">
            {varsObj?.slice(11,14).map((v, i) =>
                <SlideVal key={i} control={control} name={v[0]} initVal={v[1]} />
              )}   
            </div>
            <br></br><br></br>
            <h3>House</h3>
            <div id="w-node-_35a82d6c-2e64-22b2-490a-69d1a9de2096-781602ad" className="w-layout-layout quick-stack-16 wf-layout-layout">
            {varsObj?.slice(14,15).map((v, i) =>
                <SlideVal key={i} control={control} name={v[0]} initVal={v[1]} />
              )}  
              <div id="w-node-_35a82d6c-2e64-22b2-490a-69d1a9de2098-781602ad" className="w-layout-cell"></div>
            </div>
            <div id="w-node-_281ae0c8-c087-7d59-5ada-d56a51f2f630-781602ad" className="w-layout-layout wf-layout-layout">
              <div id="w-node-_281ae0c8-c087-7d59-5ada-d56a51f2f631-781602ad" className="w-layout-cell"><input type="submit" value="Submit" className="button w-button"/></div>
              <div id="w-node-_281ae0c8-c087-7d59-5ada-d56a51f2f632-781602ad" className="w-layout-cell"><input type="submit" value="Set to Default" onClick={onReset} className="button w-button"/></div>
            </div>
          </form>
              
          {(isSubmitted && !isDirty) && (<div className="container form-error w-form-fail"> New values saved!</div>)}

        
        </div>
      </div>

    );
};

export default ModifyVarsForm;
