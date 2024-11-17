import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Body() {

    const navigate = useNavigate();

    const [poke,setPoke] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    async function fetchData() {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
        const datas = await res.data.results;
        setPoke(datas)
    }
    console.log(poke[0]);

    function passData(urls){
        navigate('/data',{state:{
            url:urls
        }})
    }


  return (
    <div className='pokeBody' >
        {
            poke.map((data,id)=>
                <div onClick={()=>{
                    passData(data.url)
                }} className='pokeData' key={id}>
                    <p>{data.name}</p>
                </div>
            )
        }
    </div>
  )
}
