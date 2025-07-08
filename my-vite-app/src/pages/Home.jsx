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
      lightColor="#ff9100"
      speed={7}
      noiseIntensity={1.75}
      scale={0.2}
      rotation={40}
    />
  </div>

  {/* Foreground Content */}
  <div style={{ position: 'relative', zIndex: 1 }}>
    {/* Your page content goes here */}
    <h1 className="text-white text-3xl font-bold">Hello World</h1>
    <h1 className="text-white text-3xl font-bold">Hello World</h1>
    <h1 className="text-white text-3xl font-bold">Hello World</h1>
    <h1 className="text-white text-3xl font-bold">Hello World</h1>
    <h1 className="text-white text-3xl font-bold">Hello World</h1>
    <h1 className="text-white text-3xl font-bold">Hello World</h1>
    <h1 className="text-white text-3xl font-bold">Hello World</h1>
    <h1 className="text-white text-3xl font-bold">Hello World</h1>
    <h1 className="text-white text-3xl font-bold">Hello World</h1>
    <h1 className="text-white text-3xl font-bold">Hello World</h1>
    <h1 className="text-white text-3xl font-bold">Hello World</h1>
    <h1 className="text-white text-3xl font-bold">Hello World</h1>
    <h1 className="text-white text-3xl font-bold">Hello World</h1>
  </div>
</div>

)
}
export default HomePage;

