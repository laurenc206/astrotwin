import ModifyVarsForm from "./ModifyVarsForm";

const ModifyVars = ({vars, setVars, setVarsUpdated, initVars}) => {
    

    return (
        <>
        
        <div className="section black-gradient wf-section">
    <div className="container w-container"></div>
  </div>
  <div className="section light-grey wf-section">
    <div className="container w-container">
      <ModifyVarsForm vars={vars} setVars={setVars} setVarsUpdated={setVarsUpdated} initVars={initVars}/>
    </div>
  </div>
  </>
    );
};

export default ModifyVars;
