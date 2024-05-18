import { app } from "./firebase/firebase"
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import './App.css'
import { useState } from "react";

function App() {

  const fetch = async () => {
   
    const [productos, setProductos] = useState(null); 
    const db = getFirestore(app); //segundo paso, conectrarnos la base de datos


    const querySnapshot = await getDocs(collection(db, "Ropa"));
  }
  useEffect(() => {  //para que salga cuando carga la paguina
    const fetch = async () => {  // funcion async, sin esto no funciona el await
      const gafas = vector.docs.map( (elemento) => ({datos: elemento.data(), id: elemento.id,}))
      setProductos(gafas)
    }
  }, [] );


  return (
    <>

   
     <button onClick={fetch} >firebase</button>
    </>
  )
}

export default App
