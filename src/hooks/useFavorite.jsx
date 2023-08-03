import  { useContext } from 'react'
import { FavoriteContext } from '../context/FavoriteProvider'

const useFavorite = () =>{
    return useContext(FavoriteContext)
}


export default useFavorite