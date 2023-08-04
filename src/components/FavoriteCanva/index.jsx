import { Button, ListGroup, Offcanvas } from "react-bootstrap"
import PropTypes from 'prop-types'
import useFavorite from "../../hooks/useFavorite"
import { FavoriteItem } from "../FavoriteItem"
/* import useCart from "../../hooks/useCart"
import { CartContext } from "../../context/CartProvider" */
/* import { CartItem } from "../CartItem"
import { types } from "../../types" */
import styles from './index.module.css'
import { types } from "../../types"

export const FavoriteCanva = ({showCart,handleCloseCart}) =>{

/* 
const{cart,dispatch}=useCart();

const cleanCart = ()=>{
  dispatch({
    type:types.cleanCart,
    payload:{}
  })

} */
const{favorite,dispatch}=useFavorite()
const cleanCart = ()=>{
  localStorage.removeItem('favorite')
}







    return(
        <Offcanvas className={styles.BackgroundFav} show={showCart} onHide={handleCloseCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className={styles.NameSong}>Mis Favoritos</Offcanvas.Title>
    {/*   { favorite.length &&   <Button  onClick={cleanCart}  variant="secondary">Vaciar Favorito</Button>} */}
        </Offcanvas.Header>
        <Offcanvas.Body>
         



        {
favorite.length
? 
(
  <div className="">
   <div>
   <ListGroup>
    {
    favorite.map(favorites=> <FavoriteItem key={favorites.id}  music={favorites}/>)
  }
   </ListGroup>

</div> 
<div className="d-flex flex-direction-column">

 
  </div>
    </div>
)
:
<p className={styles.NameSong}>No hay favoritos agregados</p>

}



        

         
        </Offcanvas.Body>
      </Offcanvas>
    )
}
/* CartCanvas.propTypes ={
    showCart: PropTypes.bool,
    handleCloseCart : PropTypes.func
}  */