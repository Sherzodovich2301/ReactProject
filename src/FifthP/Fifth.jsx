import { useTranslation } from "react-i18next"
import IMG from "../Img/Icon (3).png"
import IMG1 from "../Img/Icon (4).png"
import IMG2 from "../Img/Icon (5).png"


export default function Fifth() {

  const { t } = useTranslation()

  return (
    <section id="beshP">
      <div className="container grid lg:grid-cols-3 md:max-w-[310px] sm:max-w-[310px] sem:max-w-[300px] lg:max-w-[1150px] m-auto sem:grid-cols-1 mt-[-100px]">
        <article className="lg:w-[320px] sem:w-[290px] xl:mb-[0px] sem:mb-[30px] cursor-pointer h-[280px] md:h-[280px] sem:h-[300px] shadow-md flex flex-col items-center text-center pt-[30px]">
          <img src={IMG} alt="" />
          <h3 className="font-[600] text-[28px] mb-[15px] leading-[35px]">{t(`Fourth.title2`)}</h3>
          <h3 className="pl-[20px] pr-[20px]">{t(`Fourth.title3`)}</h3>
        </article>

        <article className="lg:w-[320px] md:h-[280px] sem:h-[300px] sem:w-[290px] xl:mb-[0px] sem:mb-[30px] cursor-pointer h-[280px] shadow-md flex flex-col items-center text-center pt-[30px]">
          <img src={IMG1} alt="" />
          <h3 className="font-[600] text-[34px] mb-[15px] leading-[35px]">{t(`Fourth.title4`)}</h3>
          <h3 className="pl-[20px] pr-[20px]">{t(`Fourth.title3`)}</h3>
        </article>

        <article className="lg:w-[320px] md:h-[280px] sem:h-[300px] sem:w-[290px] cursor-pointer h-[280px] shadow-md flex flex-col items-center text-center pt-[30px]">
          <img src={IMG2} alt="" />
          <h3 className="font-[600] text-[28px] mb-[15px] leading-[35px]">{t(`Fourth.title2`)}</h3>
          <h3 className="pl-[20px] pr-[20px]">{t(`Fourth.title3`)}</h3>
        </article>
      </div>
    </section>
  )
}
