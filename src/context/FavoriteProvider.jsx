import { createContext, useReducer, useRef, useState} from "react"
/* import PropTypes from 'prop-types' */
import { FavoriteReducer } from "../reducers/FavoriteReducer"

const FavoriteContext = createContext(null)

const init = () =>{
    return JSON.parse(localStorage.getItem('favorite'))  || []
}




const FavoriteProvider = ({children}) =>{
const[getInfoFavorite,setGetInfoFavorite]=useState()
const [showModalFavorite,setshowModalFavorite] = useState(false)

const[favorite,dispatch]= useReducer(FavoriteReducer,[],init)




const[FavoriteRemove,setFavoriteRemove]= useState([])
   

const handleRemoveFavorite2 = (id,types,info)=>{
    setFavoriteRemove(id)
    dispatch({
       type: types,
       payload:info
    
   })


   
}







const handleDrinkIdClickFavorite =(id)=>{
   
    const getInfo = favorite.find(item=> item.id === id)

   /*  setInfoForId(getInfo)
    setshowModalFavorite((show)=>!show) */
    setshowModalFavorite((show)=>!show)
    setGetInfoFavorite(getInfo)
    /* if(getInfo){
        setToggle(false)
    }else{
        setToggle(true)
    } */
    
}

const handleShowModalClickFav = () =>{
    setshowModalFavorite((show)=>!show)
    }


    const videoRef = useRef(null);

const handlePlay = () => {
  
 

  videoRef.current.play();
   
};

const handlePause = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0

  
      
 
};







 const contextValue={
favorite,
dispatch,
handleDrinkIdClickFavorite,
getInfoFavorite,
showModalFavorite,
handleShowModalClickFav,
handlePlay,
handlePause,
videoRef ,
handleRemoveFavorite2,
FavoriteRemove



    
 }
    return (
        <FavoriteContext.Provider value={contextValue}>
{children}
        </FavoriteContext.Provider>
    )
}


/* CartProvider.propTypes ={
    children:PropTypes.node.isRequired
} */

export{
    FavoriteProvider,
    FavoriteContext
}