import { ListGroup,Image,Button } from "react-bootstrap"
/* import PropTypes from 'prop-types'
import useCart from "../../hooks/useCart" */
import styles from './index.module.css'
import { types } from "../../types"
import useMusic from "../../hooks/useMusic"
import useFavorite from "../../hooks/useFavorite"
export const FavoriteItem = (showData) =>{
    console.log(showData)
    /* const{dispatch}=useCart() */



  /*   const handleAddItem = () =>{
        dispatch({
            type:types.addItemCart,
            payload:drink
        })
    }

   const handleRemoveItem = () =>{
    dispatch({
        type:types.removeItemFromCart,
        payload:drink
    })
   }


   const handleRemoveAllItem = () =>{
    dispatch({
        type:types.removeAllItems,
        payload:drink
    })
   } */

   const SaveTrack = showData
const{handleDrinkIdClickFavorite,handleRemoveFavorite2}=useFavorite()
const{dispatch}=useFavorite()

/* const handleRemoveFavorite = ()=>{
  
    dispatch({
       type: types.removeItemFavorite,
       payload:showData.music 
   })} */


   const handleRemoveFavorite = ()=>{
    
    handleRemoveFavorite2(showData.music.id,types.removeItemFavorite,showData.music)

   
}





    return(
        <ListGroup.Item className={`d-flex gap-2 ${styles.backgroundCard}`}>
           <Image src={showData.music.album.images[0].url} width={'100px'} className={styles.photoFav} />
          

           <div style={{width:'67%'}}>
           <h5  className={styles.NameSong} >Nombre: {showData.music.name}</h5>
      
           <hr />
           <div className="d-flex justify-content-between">
           <h5></h5>
<div className="d-flex">

<Button 
className={` ${styles.buttonView}`} onClick={()=>{ handleDrinkIdClickFavorite(showData.music.id);
    }} >
    Ver mas
</Button>
<button className="btn btn-sm btn-danger" onClick={handleRemoveFavorite} >

<i className="fas fa-trash"></i>
</button>
</div>

           </div>
           
<hr/>
           </div>
            </ListGroup.Item>
    )
}

/*  CartItem.propTypes ={
   drink:PropTypes.shape({
    strDrink :PropTypes.string,
    strDrinkThumb: PropTypes.string,
    price: PropTypes.number
   })
}   */