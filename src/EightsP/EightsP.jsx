import { useTranslation } from "react-i18next"
import Pana from "../Img/pana.png"



export default function EightsP() {

  const { t } = useTranslation()

  return (
    <section id="sakkizP">
      <div className="container md:max-w-[1100px] sem:max-w-[400px] mt-[50px] md:flex sem:block flex justify-evenly items-center">
        <article className="w-[100%] pr-[100px] md:pr-[100px] sem:pr-[30px] flex justify-center">
          <img className="md:mb-0 flex md:w-[400px] sem:w-[300px] sem:mb-[20px]" src={Pana} alt="" />
        </article>
        <article className="w-[600px] md:w-[900px] sem:text-center md:text-start sem:w-[390px]">
          <article className="w-full flex justify-center">
            <p className="text-[30px] md:text-[30px] sem:text-[25px] md:w-[100%] sem:w-[300px] leading-[40px] font-[600] mb-[15px]">{t(`Eights.title1`)}</p>
          </article>
          <article className="flex  justify-center">
            <p className="mb-[30px] lg:w-[600px] sem:w-[450px] text-[15px]">{t(`Eights.title2`)}</p>
          </article>
          <button className="text-white hover:text-green-500 hover:bg-white hover:border-[1px] transition-all hover:border-green-500 w-[150px] h-[40px] rounded-[5px] bg-green-500">
            {t(`Eights.button`)}
          </button>
        </article>
      </div>
    </section>
  )
}
