import logothink from '../../Images/logo3.png'
import logo from '../../Images/logo2.png'

import { Row } from "react-bootstrap"
/* import useDrinks from "../../hooks/useDrink" */
import { MusicCard } from "../MusicCard"
import useMusic from "../../hooks/useMusic"
import styles from './index.module.css'
import useFavorite from '../../hooks/useFavorite'
import logoError from '../../Images/LogoError.svg'
export const MusicList = () =>{
 const{showData,loading}=   useMusic()


/* const {drinks} = useDrinks() */
console.log(loading)
console.log(showData && showData.length === 0 ? 'siuu' : 'boee')
return (
    <Row className={`mt-5 align-self-stretch d-flex ${styles.fondo}`}>




       {
       
       showData && showData.length === 0 ? 
       <div className={styles.boxLogo}> 
     <div>
      
      <img src={logoError} className={styles.imagesLogoError}></img>
      <p className='text-white'>Dios mío, cómo es posible este suceso! No se encuentra</p>
      </div>
     </div>
       
       
       
       
       
       
       : 
       
       
       
       
       showData && loading === false ? showData.map((music) =>(
               <MusicCard  key={music.id} music={music}    />
               )) : loading === true ?
               <div className={styles.boxLogo}> 
<div>
 
 <img src={logothink} className={styles.imagesLogo}></img>
 <p className='text-white'>Buscando... Buscando... Buscando...</p>
 </div>
</div>
 :

<div className={styles.boxLogo}> 
<div>
 
 <img src={logo} className={styles.imagesLogo}></img>
 <p className='text-white'>Busca el track de tu artista preferido en Spoktify!</p>
 </div>
</div>






            }
    </Row>
)

}