import { useState } from 'react'
{
  /* The following line can be included in your src/index.js or App.js file */
}

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

import KartiņuBloks from './KartiņuBloks';

import Tabi from './Tabi';
import LoginModal from './LoginModal';
import RegModal from './RegModal';
import { Routes, Route, Link } from 'react-router-dom';
import Galvenā from './pages/Galvenā';
import Katalogs from './pages/Katalogs';
import Lietotāju_saraksts from './pages/Lietotāju_saraksts';
import Lietotāja_kartiņa from './pages/Lietotāja_kartiņa';


function App() {
  const [userHasAccount, setUserHasAccount] = useState(false)

  function setUser(){
      setUserHasAccount(!userHasAccount)
  }
  // komentārs
  return (
    <>
      <nav>
        <Link to="/">Galvenā</Link> |{" "}
        <Link to="/catalog">Katalogs</Link> |{" "}
      </nav>

        {/* Routes */}
      <Routes>
        <Route path="/" element={<Galvenā />} />
        <Route path="/catalog" element={<Katalogs />} />
        <Route path="/users" element={<Lietotāju_saraksts />} />
        <Route path="/user/:userId" element={<Lietotāja_kartiņa />} />

      </Routes>
     
      
      <footer>
          <div className="mb-3">
                <Link to="/users" className='btn btn-info'>Lietotāju saraksts</Link>
                  <br />
               <input type="checkbox" name="activeUser" id="activeUser" onChange={setUser}/>  
               <label htmlFor="activeUser">Esmu jau reģistrēts</label>
          </div>
       
        {userHasAccount==true?<LoginModal />:<RegModal />}
        
       



      </footer>
    </>
  )
}

export default App
