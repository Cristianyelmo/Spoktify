
import style from './index.module.css'
import logo from '../../Images/logo.svg'
import nameApp from '../../Images/Group8.svg'
import { FavoriteCanva } from '../FavoriteCanva'
import { Button,Badge } from 'react-bootstrap';
import { useState } from 'react';
import useFavorite from '../../hooks/useFavorite';
import favoriteImg from '../../Images/favorite-1.png'
export const Header = ()=>{
    const [showCart,setShowCart] = useState(false);
    const handleShowCart = () => setShowCart(true)
    const handleCloseCart = () => setShowCart(false);
const{favorite}=useFavorite()


const handleLogout=()=>{
    logout()
}


    return(
        <header className={`d-flex justify-content-center py-5 ${style.header}`} >

          <div className={'d-flex'}>
            <div className={'d-flex'}>

            <img className={style.imglogo} src={logo}></img>
            <img  src={nameApp}></img>

            </div>

            <div className={style.PositionButton}>
<Button  size='lg' className={style.Btnbackground} onClick={handleShowCart}>
    {/* <i className='fas fa-shopping-cart fa-lg'></i> */}
    <img src={favoriteImg} className={style.ImgFavo}></img>
    
</Button>
<Badge className='position-absolute top-50 start-50' bg="warning">{favorite.length}</Badge>


</div>
</div>



<FavoriteCanva showCart={showCart}  handleCloseCart={handleCloseCart}/>




        </header>
    )
}