import BannerGIF from '../Component/BannerGIF';
import Beams from '../Component/Beams';
import React from 'react';
import OurImpactSection from '../Component/OurImpact';
import ShinyText from '../Component/shinyText';
import Stack  from '../Component/Gallerynew';
import LeadershipStatsSection from '../Component/Count';
import FlagshipEventsGrid from '../Component/Grid';
import Dock from '../Component/Dock';


const HomePage = () => {
  
// Demo usage
const demoItems = [
  { 
    mainText: "ASPIRANTS",
    secondaryText: "MIT-ADTU Family",
    label: "Aspirants Portal",
    onClick: () => alert('Aspirants!')
  },
  { 
    mainText: "STUDENT", 
    secondaryText: "Our Tradition",
    label: "Student Portal",
    onClick: () => alert('Student!')
  },
  { 
    mainText: "ALUMNI",
    secondaryText: "One Mission",
    label: "Alumni Network", 
    onClick: () => alert('Alumni!')
  },
  { 
    mainText: "CORPORATE",
    secondaryText: "MIT-ADTU University",
    label: "Corporate Relations",
    onClick: () => alert('Corporate!')
  },
];

 
return (
<div>
<BannerGIF/>
<OurImpactSection/>
<FlagshipEventsGrid/>

    {/* <Dock
      items={demoItems}
      panelHeight={150}
      baseItemSize={100}
      magnification={120}
    /> */}
<Stack 
  randomRotation={true}
  sensitivity={200}
  sendToBackOnClick={true}
  animationConfig={{ stiffness: 260, damping: 20 }}
/>

<LeadershipStatsSection/>


</div>

)
}
export default HomePage;

