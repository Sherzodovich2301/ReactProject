import IMG7 from "../Img/Frame 35.png"
import { useTranslation } from "react-i18next"


export default function SixthP() {

  const { t } = useTranslation()

  return (
    <section id="oltiP">
      <div className="container md:max-w-[800px] sem:max-w-[400px] mt-[50px] md:flex sem:block flex justify-evenly items-center">
        <article className="w-[100%] flex justify-center">
          <img className="md:mb-0 flex md:w-[500px] sem:w-[300px] sem:mb-[20px]" src={IMG7} alt="" />
        </article>
        <article className="w-[540px] md:w-[540px] sem:w-[390px] text-center">
          <p className="text-[30px] md:text-[30px] sem:text-[20px] md:leading-[40px] sem:leading-[30px] leading-[40px] font-[600] mb-[15px]">{t(`Sixth.title1`)}</p>
          <article className="w-full flex justify-center">
            <p className="mb-[30px] md:w-full sem:w-[300px] text-[15px]">{t(`Sixth.title2`)}</p>
          </article>
          <button className="text-white w-[150px] h-[40px] rounded-[5px] bg-green-500">
            {t(`Sixth.button`)}
          </button>
        </article>
      </div>
    </section>
  )
}
