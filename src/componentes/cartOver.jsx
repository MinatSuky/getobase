import { app } from "../firebase/firebase"
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import '../App.css'
import { useState } from "react";


export const Card = ({img}) => {

    const [productos, setProductos] = useState(null);
  const db = getFirestore(app); //segundo paso, conectrarnos la base de datos

  useEffect(() => {
    const fetch = async () => {
      const vector = await getDocs(collection(db, "Ropa"));
      const gafas = vector.docs.map((elemento) => ({ datos: elemento.data(), id: elemento.id }))
      setProductos(gafas)
    };
    fetch()
  }, []);



    return(
        <div className="cont rounded-3xl p-5 bg-white">
          <div className="mb-10 flex justify-center">
            <img className="rounded-full ima" src={img} alt="" width={400}  />
          </div>
          {
            productos && productos.length > 0 ? productos.map((elemento) => (
              <div className="flex flex-col gap-3" key={elemento.id} >
                <p className="text-black text-4xl font-bold">{elemento.id}</p>
                <p className="text-black font-medium text-xl" > <span className="text-2xl" >Color: </span>{elemento.datos.Color}</p>  
                <p className="text-black font-medium text-xl" > <span className="text-2xl" >Talla: </span>{elemento.datos.Tallas}</p>  
                <p className="text-black font-medium text-xl" > <span className="text-2xl" >Precio:</span> <span className="text-green-500">${elemento.datos.Precio}</span></p>
              </div>
            ))
              : <p className="text-black text-2xl font-medium " >cargando...</p>
          }
          <button className="mt-14 w-[100%]">Comprar</button>
          
        </div>
    )
}