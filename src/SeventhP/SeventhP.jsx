import { useTranslation } from "react-i18next"
import image from "../Img/Icon (6).png"
import image1 from "../Img/Icon (7).png"
import image2 from "../Img/Icon (8).png"
import image3 from "../Img/Icon (9).png"



export default function SeventhP() {

    const { t } = useTranslation()

    return (
        <div className="w-full h-[400px] lg:h-[400px] md:h-[450px] sem:h-[400px] flex items-center bg-gray-100 mt-[30px]">
            <div className="container lg:max-w-[1100px] m-auto flex items-center justify-evenly">
                <article className="md:max-w-[500px] sem:max-w-[350px] max-w-[500px] m-auto h-auto  text-center items-center ">
                    <p className="text-[34px] md:text-[34px] sem:text-[24px] w-full md:w-[500px] sm:w-[5    00px] mb-[13px] leading-[40px] font-[600] text-green-900">
                        {t(`Seventh.title`)}
                    </p>
                    <p className="w-[100%] md:max-w-[500px] sem:max-w-[220px] max-w-[500px] m-auto md:w-[100%] sem:w-[500px]">
                        {t(`Seventh.title1`)}
                    </p>
                </article>

                <div className="w-[400px] m-auto items-center lg:flex sem:hidden flex gap-[70px]">
                    <article className="w-[100%] items-center h-[300px]">
                        <article className="flex pt-[60px] items-center justify-evenly">
                            <article className="flex items-center gap-[30px]">
                                <img src={image} alt="" />
                                <article>
                                    <p className="text-[30px]">2,245,341</p>
                                    <p>{t(`Seventh.title12`)}</p>
                                </article>
                            </article>
                        </article>

                        <article className="flex mb-[100px] pt-[40px] items-center justify-evenly">
                            <article className="flex items-center gap-[30px]">

                                <img src={image3} alt="" />
                                <article>
                                    <p className="text-[30px]">828,867</p>
                                    <p >{t(`Seventh.title13`)}</p>
                                </article>
                            </article>
                        </article>
                    </article>

                    <article className="md:block sem:hidden w-[240px] pt-[58px] h-[300px]">
                        <article className="flex items-center mb-[15px] gap-[30px]">
                            <img src={image1} alt="" />
                            <article>
                                <p className="text-[30px]">46,328</p>
                                <p>{t(`Seventh.title14`)}</p>
                            </article>
                        </article>

                        <article className="flex pt-[40px] items-center justify-evenly">
                            <article  className="flex items-center gap-[30px]">
                                <img src={image2} alt="" />
                                <article>
                                    <p className="text-[30px]">1,926,436</p>
                                    <p>{t(`Seventh.title15`)}</p>
                                </article>
                            </article>
                        </article>
                    </article>
                </div>
            </div>
        </div>
    )
}
