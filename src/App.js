import { useState } from 'react';
import './App.css';
import Clock from './components/Clock';

function App() {
   const [showTime, setShowTime] = useState(false)
   // On inverse notre booléen, si on affichait le temps, on ne l'affiche plus et vis versa
   const handleShowTimeClick = ()=>setShowTime(!showTime)

  return <>
   <button onClick={handleShowTimeClick}>
      {showTime?"Masquer":"Afficher"}
   </button>
   {/* Si la valeur du booléen est true, le moteur JS verifie la suite et déclenche l'affichage du composant*/}
   {showTime && <Clock />}
  </>
}

export default App;
