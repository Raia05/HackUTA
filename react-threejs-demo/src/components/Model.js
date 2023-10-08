import React, { useRef, useState } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


const Model = () => 
{
    const gltf = useLOader (GLTFLoader, "../../../assets/scene.gltf");
    return <primitive object = {gltf.scene} />;

};

export default Model;