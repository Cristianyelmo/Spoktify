import {useContext} from 'react'

import { MusicContext } from '../context/MusicProvider'

const useMusic = ()=>{
    return useContext(MusicContext)
}

export default useMusic