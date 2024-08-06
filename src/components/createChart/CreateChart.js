
import CreateChartForm from "./CreateChartForm"
import GoogleAutoComplete from "./GoogleAutoComplete";


const CreateChart = ({createUser, user}) => {


    return (
 
        <div className="page-wrapper">
            <div className="section black-gradient wf-section">
                <div className="container">
                    <div id="w-node-b49c48ad-b3b4-f319-67e3-9d04be5835dc-7816029e" className="text-box _550px center-align">
                    <h1>AstroTwin</h1>
                    <p className="paragraph medium">Find your celebrity astrology twin! Start by entering your birth information so your chart can be calculated. Then using our matching algorithm, we'll compare you with over 200 celebrity birth charts to find your best match!</p>
                    <div className="spacer _32"></div>
                    <div className="form-card">
                    
                    <CreateChartForm createUser={createUser} user={user}/>

           
                    </div>
                    </div>
                </div>            
            </div>
        </div>
    
    );
};

export default CreateChart;
