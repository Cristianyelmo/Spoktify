import {createContext,useEffect, useRef, useState} from 'react'
import { TokenAcces, search } from '../services/Track.service'
import useFavorite from '../hooks/useFavorite'


const MusicContext = createContext(null)

const MusicProvider =  ({children})=>{
    const[getToken1,setgetToken] = useState()
    const [loading,setLoading] = useState(false)
const[showData,setShowData] = useState()
const [showModal,setshowModal] = useState(false)
const[InfoForId,setInfoForId] = useState()

const {favorite} =useFavorite()

const videoRef = useRef(null);

const handlePlay = () => {
  
 

  videoRef.current.play();
   
};

const handlePause = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0

  
      
 
};






    useEffect(()=>{
const getToken = async() =>{
    let tokentry = await TokenAcces()
    
    setgetToken(tokentry)
}





getToken()


{}



    },[])

    const getData = async(searchTrack) =>{

        try{
            setLoading(true)
            const dataetry = await search(searchTrack,getToken1)
        
        setShowData(dataetry.tracks.items)
        
        }catch(error){
console.error
        }finally{
            setLoading(false)
        }
        

    }


    


const handleDrinkIdClick =(id)=>{
   
    const getInfo = showData.find(item=> item.id === id)
    console.log(getInfo)
    setInfoForId(getInfo)
    setshowModal((show)=>!show)
   
    
}

/* const getForId = () =>{
   

  } */
  const handleShowModalClick = () =>{
    setshowModal((show)=>!show)
    }
    


    const contextValue = {
        getData,
        showData,
        loading,
        handleDrinkIdClick,
        InfoForId,
        showModal,
    handleShowModalClick,
    videoRef,
    handlePlay,
    handlePause
       
    }


    return(

        <MusicContext.Provider value={contextValue}>
            {children}
        </MusicContext.Provider>
    
    
    )

}

    

export{
    MusicContext,
    MusicProvider
}