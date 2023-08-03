import {Modal,Button, Row, Col,Image} from 'react-bootstrap'

import useMusic from '../../hooks/useMusic'
import videoDance from '../../Images/videoxd.mp4'
import styles from './index.module.css'
import useFavorite from '../../hooks/useFavorite'
export const MusicModalFavorite = () =>{

   
  const {getInfoFavorite,showModalFavorite,
  handleShowModalClickFav,handlePlay,
  handlePause,
  videoRef} =useFavorite() 

/* const showIngredients = () =>{
    const ingredients = [];
    for (let i = 1; i < 15; i++) {
        if(recipe[`strIngredient${i}`]){
       ingredients.push(
        <li>
            {recipe[`strIngredient${i}`]}  {recipe[`strMeasure${i}`]}
        </li>
       )
    }
        
    }
    console.log(ingredients)
    return ingredients
}

const{dispatch} =useCart()
const drink = getDrinkById(drinks,recipe.idDrink)
   const handleAddCart = ()=>{
    dispatch({
        type: types.addItemCart,
        payload:drink
    })
   }
 */
   const Stylexd = {
    width: "25%"
    
  };


    return(
        <Modal show={showModalFavorite } onHide={  handleShowModalClickFav } size='lg' className={styles.FlexModal}  >
             <Row className={styles.backgroundModal} >
                <Col>
                <Image src={ getInfoFavorite ? getInfoFavorite.album.images[0].url : ""}  fluid className={`rounded-start ${styles.ImgModal}`} />
                </Col>
               
        
        <Col>
        <Modal.Header  closeButton  className={styles.FlexModalName}>

         {/* <button closeButton type='button' className='btn-close' aria-label='Close'></button> */}
  
        </Modal.Header>
        <Modal.Body>
        <Modal.Title className={styles.NameSong}>Nombre : {getInfoFavorite  ? getInfoFavorite.name   : ""}</Modal.Title>
          <Modal.Title className={styles.NameSong}>Artista: {getInfoFavorite  ? getInfoFavorite.artists[0].name : ""}</Modal.Title>
{/*           <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={Stylexd} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div> */}
 <div className='d-flex'>
<p className={styles.PopularityName} >Popularidad: {getInfoFavorite ?getInfoFavorite.popularity : ""}% </p>
          <progress className={styles.progress} value={getInfoFavorite ? getInfoFavorite.popularity : ""}  max="100"></progress>

          </div>





            <div>
            <audio controls  className={styles.audioModal} onPlay={handlePlay} onPause={handlePause} >
    <source src={getInfoFavorite  ? getInfoFavorite.preview_url : ""
}  type="audio/mp3"/>

</audio>
<div className={styles.ResponsiveImg} >
<video className={styles.videoEdit}
       ref={videoRef}
       src={videoDance}
       
      loop
      />
</div>

            </div>
            


        </Modal.Body>
                </Col>
             </Row>
      </Modal>
    )
}