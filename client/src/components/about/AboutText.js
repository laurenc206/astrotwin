
import TechnologiesUsed from './sections/TechnologiesUsed.js';
import Motivation from './sections/Motivation.js';
import HowItWorks from './sections/HowItWorks.js'
import VersionOne from './sections/VersionOne.js';
import VersionTwo from './sections/VersionTwo.js';
import Resources from './sections/Resources.js';


const AboutText = () => {


    return (
        <>
            
            <div>
            <TechnologiesUsed/>

            <Motivation/>

            <HowItWorks/>

            <VersionOne/>

            <VersionTwo/>

            <Resources/>
            </div>
        </>
    );
};

export default AboutText;
