import { useTranslation } from "react-i18next"
import Pana from "../Img/pana.png"



export default function EightsP() {

  const { t } = useTranslation()

  return (
    <section id="sakkizP">
      <div className="container md:max-w-[800px] sem:max-w-[400px] mt-[50px] md:flex sem:block flex justify-evenly items-center">
        <article className="w-[100%] pr-[100px] md:pr-[100px] sem:pr-[30px] flex justify-center">
          <img className="md:mb-0 flex md:w-[400px] sem:w-[300px] sem:mb-[20px]" src={Pana} alt="" />
        </article>
        <article className="w-[540px] md:w-[540px] sem:w-[390px] text-center">
          <article className="w-full flex justify-center">
            <p className="text-[30px] md:text-[30px] sem:text-[25px] md:w-[100%] sem:w-[300px] leading-[40px] font-[600] mb-[15px]">{t(`Eights.title1`)}</p>
          </article>
          <article className="flex justify-center">
            <p className="mb-[30px] w-full sem:w-[300px] md:w-full  text-[15px]">{t(`Eights.title2`)}</p>
          </article>
          <button className="text-white w-[150px] h-[40px] rounded-[5px] bg-green-500">
            {t(`Eights.button`)}
          </button>
        </article>
      </div>
    </section>
  )
}
