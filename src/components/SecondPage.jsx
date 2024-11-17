import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'


export default function SecondPage() {
    const location = useLocation();
    const {url} = location.state || {};
    
    const [poke,setPoke] = useState([]);
    const [loading,setLoading] = useState(false)

    async function fetchData() {
        try{
            const res = await axios.get(url);
            const data = await res.data;
            setPoke(data);
            setLoading(true)
        }catch(e){
            console.log(e);
            
        }
    }

    useEffect(()=>{
        fetchData();
    },[])
    
    

  return (
    <div>
        {
        loading &&
        <div>
        <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
        }} >
        <img width={300} src={poke.sprites.front_default}/>
        <h1>{poke.name}</h1>

        </div>

        <div style={{
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            gap:'20px'
        }} >
            <h2 style={{
                textAlign:'center',
                marginTop:'50px',
                color:'blue'
            }} >Moves</h2>
        {
           poke.moves.map((move,id)=><div key={id} >
            <p>{move.move.name}</p>

           </div>)
        }


        </div>


        </div>

        }
        

</div>
  )
}
