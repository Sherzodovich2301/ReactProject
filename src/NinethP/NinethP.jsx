import { useTranslation } from "react-i18next"
import Naush from "../Img/image 9.png"
import images from "../Img/Logo (5).png"
import images1 from "../Img/Logo (6).png"
import images2 from "../Img/Logo (7).png"
import images3 from "../Img/Logo (8).png"
import images4 from "../Img/Logo (9).png"



export default function NinethP() {

    const { t } = useTranslation()

    return (
        <section>
            <div className="w-[100%] md:flex sem:hidden lg:h-[700px] sem:h-[1000px] mt-[30px] flex items-center h-[400px] bg-gray-100">
                <div className="container lg:flex sem:block lg:max-w-[1250px] sem:max-w-[600px] m-auto items-center flex justify-evenly">
                    <article className="w-full flex justify-center">
                        <img src={Naush} alt="" />
                    </article>
                    <article>
                        <article className="w-[600px] text-center h-[350px] ">
                            <article className="w-[100%] flex justify-center">

                                <p className="max-w-[400px] text-center">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                                </p>
                            </article>
                            <p className="text-[20px] font-[500] text-green-600 mt-[20px]">
                                {t(`Nineth.title1`)}
                            </p>
                            <p className=" mb-[20px]">
                                {t(`Nineth.title2`)}
                            </p>

                            <article className="w-full justify-center flex gap-[30px]">
                                <img src={images} alt="" />
                                <img src={images1} alt="" />
                                <img src={images2} alt="" />
                                <img src={images3} alt="" />
                                <img src={images4} alt="" />
                            </article>

                        </article>
                    </article>
                </div>
            </div>
        </section >
    )
}
