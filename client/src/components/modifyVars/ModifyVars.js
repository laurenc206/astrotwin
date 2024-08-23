import ModifyVarsForm from "./ModifyVarsForm";

const ModifyVars = ({vars, setVars, setVarsUpdated, initVars, networkError}) => {
    

    return (
        <>
        
        <div className="section black-gradient wf-section">
    <div className="container w-container"></div>
  </div>
  <div className="section light-grey wf-section">
    <div className="container w-container">
      <ModifyVarsForm vars={vars} setVars={setVars} setVarsUpdated={setVarsUpdated} initVars={initVars} networkError={networkError}/>
    </div>
  </div>
  </>
    );
};

export default ModifyVars;
