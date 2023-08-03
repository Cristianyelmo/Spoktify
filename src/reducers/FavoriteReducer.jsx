
import {types} from '../types'



export const FavoriteReducer = (state=[],action) =>{
     const {id} =action.payload
  
     const item = state.find(item => item.id === id)  
   
const addItemToFavorite= (item)=>{
   
    const FavoriteUpdated = !item ? [...state,{
        ...action.payload,
      
    }] : [...state]
    localStorage.setItem('favorite',JSON.stringify(FavoriteUpdated))

return FavoriteUpdated
  
}


const removeAllitemsFromCart = () =>{
    const FavoriteUpdated = state.filter(item=>item.id !== id)
 localStorage.setItem('favorite',JSON.stringify(FavoriteUpdated))
 return FavoriteUpdated
 }






    switch (action.type) {
        case types.addItemFavorite:

     return addItemToFavorite(item)

     case types.removeItemFavorite:

     return removeAllitemsFromCart()
             
     case types.CleanFavorite:
        
        return []

        default:
            return state
    ;
    }
}