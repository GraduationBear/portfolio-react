import React from 'react'
import * as THREE from 'three'
import { useRef } from 'react'
import {useLoader} from '@react-three/fiber'
import {useFrame} from '@react-three/fiber'
import { MeshPhongMaterial, SphereBufferGeometry, TextureLoader } from 'three'
import cloudsMap from '../../images/8k_earth_clouds.jpg'
import dayMap from '../../images/8k_earth_daymap.jpg'
import nightMap from '../../images/8k_earth_nightmap.jpg'
import normalMap from '../../images/8k_earth_normal_map.jpg'
import specularMap from '../../images/8k_earth_specular_map.jpg'

export default function Box(props) {
    

    const earthRef=useRef();
    const cloudsRef = useRef()
    useFrame(({clock})=>{
        const elapsedTime=clock.getElapsedTime()
        

        earthRef.current.rotation.y = elapsedTime /8.6
        cloudsRef.current.rotation.y = elapsedTime /7
    })

    const [DayMap,NightMap,SpecularMap,NormalMap,CloudsMap]=useLoader(TextureLoader,[dayMap,nightMap,specularMap,normalMap,cloudsMap]);
  return (
      <>
        
        <mesh position={[-0.001*props.left,0.001*props.top,0]} ref={cloudsRef}>
            <sphereBufferGeometry args={[1.504,50,50]}/>
            <meshPhongMaterial map={CloudsMap} opacity={0.5} depthWrite={true} transparent={true} side={THREE.DoubleSide}/> 
        </mesh>
        <mesh ref={earthRef} position={[-0.001*props.left,0.001*props.top,0]} rotation={[0,0,0]}>
            <sphereBufferGeometry args={[1.5,50,50]}/>
            <meshPhongMaterial specularMap={SpecularMap}/>
            <meshStandardMaterial map={DayMap}  normalMap={NormalMap}/>
        </mesh>
    </>
  )
}
