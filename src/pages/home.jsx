import { Card } from "../componentes/cartOver"
import img1 from "../assets/img/cam1.png"
import img2 from "../assets/img/cam2.png"
import img3 from "../assets/img/cam3.png"
import img4 from "../assets/img/bmw.jpg"
import { Bmw } from "../componentes/cartaVBW"

export const Home = () => {
  return (
    <>
      <div className="flex gap-9 mt-7 justify-center items-end">
        <Card img={img1} />
        <Card img={img2} />
        <Card img={img3} />
      </div>

      <div className="flex gap-6 mt-7 justify-center items-end">
          <Bmw img={img4} />
          <Bmw img={img4} />
          <Bmw img={img4} />
      </div>
    </>
  )
}