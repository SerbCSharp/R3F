import { Physics, Debug } from '@react-three/rapier'
import Lights from './Lights.jsx'
import { Level } from './Level.jsx'
import Player from './Player.jsx'
import useGame from './stores/useGame.jsx'

export default function Experience()
{
    const blocksCount = useGame((state) => state.blocksCount)
    return <>

        <color args={[ '#bdedfc' ]} attach="background" />

        <Physics>
             <Lights />
            <Level count={ blocksCount }/>
            <Player />
        </Physics>
    </>
}