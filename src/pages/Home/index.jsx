
import { MusicList } from "../../components/MusicList";
 import { MusicModalDetail } from "../../components/MusicModalDetail";  
import { MusicModalFavorite } from "../../components/MusicModalFavorite";
import { SearchForm } from "../../components/SearchForm";


export const Home = ()=>{



   
        
    return(
        <>
        <SearchForm/> 
        <MusicList/>
        <MusicModalDetail/>  
        <MusicModalFavorite/>
  



        
      
        </>
    )
}