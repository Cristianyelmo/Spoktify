import { Card, Col,Button } from "react-bootstrap"
/* import PropTypes from 'prop-types'
import useDrinks from "../../hooks/useDrink" */
import styles from './index.module.css'
/* import { useState } from "react" */
import useMusic from "../../hooks/useMusic"
import { types } from "../../types"
import useFavorite from "../../hooks/useFavorite"
/* import useCart from "../../hooks/useCart"
import { types } from "../../types"
import Swal from 'sweetalert2' */
/* import useUser from "../../hooks/useUser" */
import favoriteFavo from '../../Images/favorite-1.png'
import favoriteFavo2 from '../../Images/favorite-2.png'
import { useEffect, useState } from "react"
import logo from '../../Images/logo.svg'
import logoError from '../../Images/LogoError.svg'

import Swal from "sweetalert2"



export const MusicCard = (showData) =>{
 const{handleDrinkIdClick} =useMusic()
 const [toggle, setToggle] = useState(false)
 const [Try, SetTry] = useState(false)
 
 let {dispatch,favorite,FavoriteRemove} =useFavorite() 

/*  for (var i = 0; i < favorite.length; i++) {
   console.log(i)
  }
 */
console.log()

const FavoriteMusic = favorite  && favorite.find( 
    (favorites) => favorites.id === showData.music.id
  )
  

useEffect(() => { 

    if(FavoriteRemove === showData.music.id){
        SetTry(false); 
        setToggle(false)
    }
       if (FavoriteMusic) { 
        SetTry(true); 
        setToggle(true)
       } else { 
        SetTry(false); 
       } 
   
   /*     if(props.FavoriteRemove === showData.music.id){
       alert('que pasaa')
       } */
console.log('funciona use efect')



     }, [FavoriteMusic]);
   







/* console.log(showData) */
    
   









 const handleRemoveFavorite = ()=>{
  
    dispatch({
       type: types.removeItemFavorite,
       payload:showData.music 
   })
   SetTry(false)

   Swal.fire({
   background: '#262626',
      color:'rgba(157, 157, 157, 1)',

    title:'Se elimino de Favoritos',
    showConfirmButton:false,
    timer:1500,
    width: '400px',   
    height: '300px',
    imageUrl: logoError,
      imageHeight: 150,
      imageWidth: 150,

   
       
})

  


}



const handleAddFavorite = ()=>{
  
    dispatch({
       type: types.addItemFavorite,
       payload:showData.music 
   })
 
   Swal.fire({
    background: '#262626',
      color:'rgba(157, 157, 157, 1)',
      imageUrl: logo,
      imageHeight: 150,
      imageWidth: 150,
  /*   icon:'success', */
    title:'Se agrego a  Favoritos',
    showConfirmButton:false,
    timer:1500,
    width: '400px',   
    height: '300px'
})

SetTry(true)
   

}

const handleClick = () => {
    setToggle(!toggle)
console.log(toggle)
    if(toggle === false){
        handleAddFavorite()
    }else{
        handleRemoveFavorite()
    } 
  }; 


  







/* {
toggle ? handleAddFavorite() :"" 

}  */

/* const favoriteSave = favorite.filter(item => item.id === showData.music.id)

{
    showData && favoriteSave ? setToggle(true) : ""
    
}
 */





    return(
        <Col md={6} lg={3}>
<Card className={`mb-4  ${styles.FondoCard} `}>

<Card.Img variant='top' className={styles.imgCard} src={showData.music.album.images[0].url}  />

<Card.Body>

<Card.Title className={styles.favoriteBoxFlex} >
    <div>
 <p className={styles.NameSong}> Nombre: {showData ? showData.music.name :favorite.name}</p>

 <p className={styles.NameSong}> Nombre: {showData.music.artists[0].name}</p>

 </div>
 <div className={styles.favoriteBox}>


 <a  style={{cursor:"pointer"}}className="text-danger" onClick={handleClick}>
    {
        toggle || Try ? <img src={favoriteFavo2} className={styles.ImgFavo}></img>   :





        <img src={favoriteFavo} className={styles.ImgFavo}></img>


        
    }
 
    
    </a>
 

 </div>
</Card.Title>

    
    
    
   
<Button 
className={`w-100 text-uppercase mt-2 ${styles.buttonView}`} onClick={()=>{ handleDrinkIdClick(showData.music.id);
    }} >
    Ver mas
</Button>
{/* <Button variant={'danger'}
className='w-100 text-uppercase mt-2' 
   onClick={handleAddFavorite}  >
    Favoritos
</Button> */}

</Card.Body>




</Card>

        </Col>
    )
}


 /* DrinkCard.propTypes ={
    drink:PropTypes.object.isRequired,
    strDrinkThumb : PropTypes.string.isRequired,
    strDrink : PropTypes.string.isRequired 
} 

DrinkCard.defaultProps = {
    strDrinkThumb : 'https://alumni.crg.eu/sites/default/files/default_images/default-picture_0_0.png',
    strDrink : 'Nombre de la Bebida' 
} */