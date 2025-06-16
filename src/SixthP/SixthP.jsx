import IMG7 from "../Img/Frame 35.png"
import { useTranslation } from "react-i18next"


export default function SixthP() {

  const { t } = useTranslation()

  return (
    <section id="oltiP">
      <div className="container md:max-w-[1200px] sem:max-w-[400px] mt-[50px] md:flex sem:block flex justify-evenly items-center">
        <article className="w-[100%] flex justify-center">
          <img className="md:mb-0 md:w-[500px] sem:w-[300px] sem:mb-[20px]" src={IMG7} alt="" />
        </article>
        <article className="w-[600px] md:w-[900px] sem:text-center md:text-start sem:w-[390px]">
          <p className="text-[36px] md:text-[36px] sem:text-[20px] md:leading-[40px] sem:leading-[30px] leading-[40px] font-[600] mb-[15px]">{t(`Sixth.title1`)}</p>
          <article className="w-full flex justify-center">
            <p className="mb-[30px] lg:w-[600px] sem:w-[450px] text-[15px]">{t(`Sixth.title2`)}</p>
          </article>
          <button className="text-white hover:text-green-500 hover:bg-white hover:border-[1px] transition-all hover:border-green-500 w-[150px] h-[40px] rounded-[5px] bg-green-500">
            {t(`Sixth.button`)}
          </button>
        </article>
      </div>
    </section>
  )
}
