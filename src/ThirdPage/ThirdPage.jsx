import img1 from "../Img/Logo (5).png"
import img12 from "../Img/Logo (6).png"
import img13 from "../Img/Logo (7).png"
import img14 from "../Img/Logo (8).png"
import img15 from "../Img/Logo (9).png"
import img16 from "../Img/Logo (10).png"
import img17 from "../Img/Logo (11).png"
import { useTranslation } from "react-i18next"



export default function ThirdPage() {

  const { t } = useTranslation()


  return (
    <section id="uchP">
      <div className="container w-full h-[300px]">
        <article className="flex flex-col mb-[50px] mt-[20px] items-center">
          <p className="text-[25px] md:mt-[0px] sem:mt-[80px] font-[600]">
            {t(`Second.title`)}
          </p>
          <p className="sem:text-center">
            {t(`Second.title1`)}
          </p>
        </article>
        <article className="container  w-[100%] grid grid-cols-7 lg:max-w-[1050px] sem:max-w-[700px] m-auto">
          <img src={img1} alt="" />
          <img src={img12} alt="" />
          <img src={img13} alt="" />
          <img src={img14} alt="" />
          <img src={img15} alt="" />
          <img src={img16} alt="" />
          <img src={img17} alt="" />
        </article>
      </div>
    </section>

  )
}
