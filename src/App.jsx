import { useState } from 'react'
import Clicker from './Clicker.jsx'

export default function App({ clickerCount })
{
    const [hasClicker, setHasClicker] = useState(true)
    const [count, setCount] = useState(0)

    const toggleClickerClick = () =>
    {
        setHasClicker(!hasClicker)
    }

    const increment = () =>
    {
        setCount(count + 1)
    }

    const tempArray = [...Array(clickerCount)]

    return <>
        <div>Total count: { count }</div>
        <button onClick={ toggleClickerClick }>{ hasClicker ? 'Hide' : 'Show' } Clicker</button>
        { hasClicker && <>
            <Clicker increment={ increment } keyName="countA" color={ `hsl(${ Math.random() * 360 }deg, 100%, 70%)` } />
            <Clicker increment={ increment } keyName="countB" color={ `hsl(${ Math.random() * 360 }deg, 100%, 70%)` }/>
            <Clicker increment={ increment } keyName="countC" color={ `hsl(${ Math.random() * 360 }deg, 100%, 70%)` }/>
        </> }
    </>
}