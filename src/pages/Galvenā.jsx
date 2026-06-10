import Karuselis from '../Karuselis';
import KartiņuBloks from '../KartiņuBloks';
import Tabi from '../Tabi';

function Galvenā() {
    return ( 
    <>
      <Karuselis />   
     <h1>Galvenā</h1>
     <h1 className='text-center m-3'>Hello React JS</h1>
      <h2 className='text-center text-muted'> Mācos strādāt ar react ietvaru</h2>
      <hr />
        {/* Komentārs */}
      <div className="container">
          <KartiņuBloks />
          <Tabi />
          
      </div>   
    </> );
}

export default Galvenā;