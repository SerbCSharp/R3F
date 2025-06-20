import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) =>
{
    return {
        blocksCount: 10,
        startTime : 0,
        endTime: 0,
        phase: 'ready',
        start: () =>
        {
            set((state) =>
            {
                if(state.phase === 'ready')
                    return {phase: 'playing', startTime: Date.now(), blocksSeed: Math.random()}
                return {}
            })
        },
        restart: () =>
        {
            set((state) =>
            {
                if(state.phase === 'playing' || state.phase === 'ended')
                    return {phase: 'ready'}
                return {}
            })
        },
        end: () =>
        {
            set((state) =>
            {
                if(state.phase === 'playing')
                    return {phase: 'ended', endTime: Date.now()}
                return {}
            })
        }
    }
}))