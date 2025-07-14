import Beams from '../Component/Beams';
import React from 'react';

const HomePage = () => {
return (
<div style={{ position: 'relative', zIndex: 0 }}>
  {/* Background Layer */}
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
    }}
  >
    <Beams
      beamWidth={8}
      beamHeight={30}
      beamNumber={22}
      lightColor="#ffffff"
      speed={7}
      noiseIntensity={1.75}
      scale={0.2}
      rotation={40}
    />
  </div>
</div>

)
}
export default HomePage;

