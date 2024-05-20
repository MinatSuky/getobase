import { useEffect, useState } from "react"
import { app } from "../firebase/firebase"
import { collection, getFirestore, getDocs, } from "firebase/firestore";



export const Bmw = ({img}) => {

    const [carros, setCarros] = useState(null)
    const db = getFirestore(app); //segundo paso, conectrarnos la base de datos

    useEffect(() => {
        const movil = async () => {
            const llantas = await getDocs(collection(db, "Carro"));
            const gasolina = llantas.docs.map((elemt) => ({ datos: elemt.data(), id: elemt.id }))
            setCarros(gasolina)
        };
        movil()
    }, []);


    return (

        <div className="cont rounded-3xl p-5 bg-white">
            <div className="mb-10 flex justify-center">
                <img className="rounded-3xl ima" src={img} alt="" width={400} />
            </div>
            {
                carros && carros.length > 0 ? carros.map((elemt) => (
                    <div>
                        <div className="flex flex-col gap-3" key={elemt.id} >
                            <p className="text-black text-4xl font-bold">BMW</p>
                            <p className="text-black font-medium text-xl" > <span className="text-2xl" >Color: </span>{elemt.datos.Caballos}</p>
                            <p className="text-black font-medium text-xl" > <span className="text-2xl" >Capacidad: </span>{elemt.datos.Capacidad}</p>
                            <p className="text-black font-medium text-xl" > <span className="text-2xl" >Color: </span>{elemt.datos.Coloor}</p>
                            <p className="text-black font-medium text-xl" > <span className="text-2xl" >Velocidad: </span>{elemt.datos.Velocidad}</p>
                            <p className="text-black font-medium text-xl" > <span className="text-2xl" >Precio:</span> <span className="text-green-500">${elemt.datos.Precio}</span></p>
                        </div>
                    </div>
                ))
                    : "Cargando..."
            }
            <button className="mt-14 w-[100%]">Comprar</button>
        </div>

    )
}