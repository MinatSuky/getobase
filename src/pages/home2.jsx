

import { setDoc, doc, getFirestore, collection, addDoc } from "firebase/firestore"
import { app } from "../firebase/firebase";
import { useState } from "react";


export const Home2 = () => {

    const [productos, setProductos] = useState({})

    const db = getFirestore(app);

    const geto = async () => {
        await addDoc(collection(db, "citles"),{
        name: "TOKIO",
        country: "JAPON"
    });

        };
        
        
        return(
            
         <>
         <div>
            <p className="text-white cursor-pointer" onClick={geto}>agregar</p>
          </div>
          <div className="flex flex-col">
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
         </>
        
    )
}
