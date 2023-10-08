import React from 'react';
import {Canvas} from 'react-three-fiber';
import Model from './components/Model';

function App()
{
  return
  (
    <div style = {{width: '100vw',height: '100vh'}}>
      <Canvas>
        <ambientLight />
        <pointLight position = {[10,10,10]} />
        <Model  />
      </Canvas>
    </div>
  );
}

export default App;