import axios from 'axios';
import {useEffect , useState} from 'react';
import { useParams } from "react-router";
import Loader from 'react-loader';



const SearchBody = (location) => {

const {param} = useParams();

const [loading, setLoading] = useState(true);

useEffect(()=>{
    setLoading(false)
    axios.post('https://urlbackend.joshuadaniel.me/get',{
        param:param
    }).then((response)=>{
    window.location.href = response.data.data[0].url;
setLoading(true)
    })    
}
)
return (
    <Loader loaded={loading}>
        <div></div>
    </Loader>
)
}


export default SearchBody;