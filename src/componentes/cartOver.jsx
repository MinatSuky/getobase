import { app } from "../firebase/firebase"
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import '../App.css'
import { useState } from "react";


export const Card = () => {

  const [productos, setProductos] = useState(null);
  const [producto, setProducto] = useState({});
  const [recargar, setRecargar] = useState(false);
  const db = getFirestore(app); //segundo paso, conectrarnos la base de datos

  useEffect(() => {
    const fetch = async () => {
      const vector = await getDocs(collection(db, "Ropa"));
      const gafas = vector.docs.map((elemento) => ({ ...elemento.data(), id: elemento.id }))
      setProductos(gafas)
    };
    fetch()
  }, [recargar]);

  const agragarDocumento = async () => {
    const docRef = await addDoc(collection(db, "Ropa"), producto);
    setRecargar(!recargar)
  }

  const eliminar = async (idBorrado) => {
    const docRef = doc(db, "Ropa", idBorrado)
    deleteDoc(docRef)
    setRecargar( surge)
  }

  return (


    <div className="flex flex-col gap-20">
      <div className="flex justify-center gap-10 flex-wrap">
        {
          productos && productos.length > 0 ? productos.map((elemento) => (
            <div className="flex flex-col gap-3" key={elemento.id} >
              <p className="text-white text-4xl font-bold"><span className="text-white">{elemento.Nombre}</span></p>
              <p className="text-neutral-400 font-medium text-xl"><span className="text-2xl">Color:  </span><span className="text-white">{elemento.Color}</span> </p>
              <p className="text-neutral-400 font-medium text-xl"><span className="text-2xl">Talla: </span><span className="text-white">{elemento.Tallas}</span></p>
              <p className="text-neutral-400 font-medium text-xl"><span className="text-2xl">Precio: </span><span className="text-green-500">${elemento.Precio}</span></p>
              <div>
                <p className="text-white cursor-pointer py-3 px-6 mt-6 rounded-xl bg-red-700 text-center font-medium"
                  onClick={() => { eliminar(elemento.id); }} >Eliminar</p>
              </div>
            </div>
          ))
            : <div className="flex flex-col gap-6 justify-center">
              <div className="animate-spin w-14">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
            </div>
        }
      </div>
      <div className="cont4 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-3">
          <input type="text" className="px-3 py-2 rounded-xl" placeholder="Nombre..."
            onChange={(e) => setProducto({ ...producto, Nombre: e.target.value })} />
          <input type="text" className="px-3 py-2 rounded-xl" placeholder="Color..."
            onChange={(e) => setProducto({ ...producto, Color: e.target.value })} />
          <input type="text" className="px-3 py-2 rounded-xl" placeholder="Talla..."
            onChange={(e) => setProducto({ ...producto, Tallas: e.target.value })} />
          <input type="text" className="px-3 py-2 rounded-xl" placeholder="Precio..."
            onChange={(e) => setProducto({ ...producto, Precio: e.target.value })} />
        </div>
        <div className="flex justify-center">
          <p className="text-black cursor-pointer py-3 px-6 mt-6 rounded-xl bg-lime-300 font-medium" onClick={agragarDocumento}>Agregar</p>
        </div>
      </div>
    </div>

  )
}