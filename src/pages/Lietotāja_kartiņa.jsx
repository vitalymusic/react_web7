import { useParams } from "react-router-dom";

function Lietotāja_kartiņa() {
    const {userId} = useParams()


    return ( <>
        <h1>Lietotāja_kartiņa</h1>
        <p>Informācija par lietotāju: {userId}</p>

    </> );
}

export default Lietotāja_kartiņa;