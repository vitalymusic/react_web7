import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap"

function Lietotāja_kartiņa() {
     const {userId} = useParams()

    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
            fetch(`https://dummyjson.com/users/${userId}`)
            .then(res => res.json())
            .then(data=>setUserData(data))
            .then(setLoading(false));
    },[])


    return ( <>
        <h1>{userData.firstName} {userData.lastName}</h1>
        <img src={userData.image} />
        <p>Vecums: {userData.age}</p>
        <p>Epasts: {userData.email}</p>
    </> );
}

export default Lietotāja_kartiņa;