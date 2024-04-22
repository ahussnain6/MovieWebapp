import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import "./style/Detail.css";
import {fetchdetails,fetchSimilar} from "../../../store/MovieSlice"
import { useDispatch,useSelector } from "react-redux";
import { load1 } from '../../../assets/pic';
import Similar from '../../Pages/components/Similar';
import Explain from '../../Pages/components/Explain';
const MovieDetail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state)=> state.movie.details);
  const similar = useSelector((state)=> state.movie.similar);
  const [load,setLoad] = useState(false);
  const [api,setApi] = useState([]);
  const [smi,setSmi] = useState([]);
 useEffect(()=>{
 dispatch(fetchdetails(id));
dispatch(fetchSimilar(id));
},[id]);
 useEffect(()=>{
  setLoad(true);
  setApi(data);
  setSmi(similar);
  setLoad(false);
 },[data,similar])
 if(load){return (<img src={`${load1}`} className='imaging' />)}
  return (<>
   <Explain data={{api,id}} /> 
      <Similar data={smi} />
          </>  
          ) }  
export default MovieDetail;