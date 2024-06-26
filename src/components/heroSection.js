import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {addKeyInDB, getData} from "../Utils"
const HeroSection = () => {
  const [inputText, setInputText] = useState("")
  const navigate = useNavigate();
  const location = useLocation();
  var hash = "";

  useEffect(()=>{
     hash = location.hash.substring(1);
    if (!hash) {
      // If no ID in the URL, generate a new one
      const newId = uuidv4();
      navigate(`#${newId}`, { replace: true });
    }
    if(hash){
      addKeyInDB(hash)
      getData(hash, setInputText)
    }
  }, [navigate, location]);

  // const currentId = location.hash.substring(1);

  // console.log(currentId,"current id")
  return (
    <>
    <input value={inputText} onChange={e => {setInputText(e.target.value); addKeyInDB(hash, e.target.value)}}/>
    </>
  )
}

export default HeroSection