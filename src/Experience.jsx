import { MeshReflectorMaterial, Float, Text, Html,  PivotControls, TransformControls, OrbitControls } from "@react-three/drei"
import { useRef } from 'react'

export default function Experience()
{
    const cube = useRef()
    const sphere = useRef()

    return <>
        <OrbitControls makeDefault />
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1 } />
        <ambientLight intensity={ 0.5 } />

        <PivotControls anchor={[ 0, 0, 0 ]} depthTest={ false } lineWidth={ 1 } scale={ 2 }>
            <mesh ref={ sphere } position-x={ - 2 }>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
                <Html position={[ 1, 1, 0 ]} wrapperClass="label" center distanceFactor={ 6 } occlude={[ sphere, cube ]}>That's a sphere </Html>
            </mesh>
        </PivotControls>

        <mesh ref={ cube } position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <TransformControls object={ cube } mode='translate'/>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <MeshReflectorMaterial color="greenyellow" resolution={ 512 } mirror={ 0.5 }/>
        </mesh>

        <Float speed={ 3 } floatIntensity={ 2 }>
            <Text font='./Roboto-Black.woff' fontSize={ 1 } color='salmon' position-y={ 3 } maxWidth={ 7} textAlign="center">
            I LOVE Леночку и Сонечку
            <meshNormalMaterial />
            </Text>
        </Float>
    </>
}