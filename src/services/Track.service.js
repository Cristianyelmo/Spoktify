 import { useEffect, useState } from "react"


const CLIENT_ID = 'ec23eb24fc0f4a058f023ac3bcd19b13'
const CLIENT_SECRET = '65935d50c55e4e82a1ea0bd9e96ca1cb'






export const TokenAcces = async()=>{
    try {
           var authParameters ={
      method:'POST',
      headers:{
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      body:'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    
    
      const fetchTOken = await fetch('https://accounts.spotify.com/api/token',authParameters)
      const resultToken = await fetchTOken.json();
      
      return resultToken.access_token

        
        
    } catch (error) {
        
    }
 
      }


      export const search = async(searchImput,accesToken)=>{
  
        
        
          const artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchImput + '&type=track' ,{
            method:'GET',
            headers:{
              'Content-Type':'application/json',
              'Authorization':'Bearer ' + accesToken
            }
          })
          const resultToken = await artistID.json();
    
      return resultToken
         
        }
    


  