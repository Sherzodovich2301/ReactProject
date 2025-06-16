import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import image from "../Img/Icon (6).png";
import image1 from "../Img/Icon (7).png";
import image2 from "../Img/Icon (8).png";
import image3 from "../Img/Icon (9).png";

const Count = (target, duration = 3000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const vaqt = target / (duration / 30);
    const interval = setInterval(() => {
      start += vaqt;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);

    return () => clearInterval(interval);
  }, [target, duration]);

  return count.toLocaleString(); 
};

export default function SeventhP() {
    const { t } = useTranslation();

    const count1 = Count(2245341);
    const count2 = Count(828867);
    const count3 = Count(46328);
    const count4 = Count(1926436);

    return (
        <div className="w-full h-[400px] lg:h-[400px] md:h-[450px] sem:h-[400px] flex items-center bg-gray-100 mt-[30px]">
            <div className="container lg:max-w-[1100px] m-auto flex items-center justify-evenly">
                <article className="md:max-w-[500px] sem:max-w-[350px] max-w-[500px] m-auto h-auto  text-center items-center ">
                    <p className="text-[34px] md:text-[34px] sem:text-[24px] w-full md:w-[500px] sm:w-[500px] mb-[13px] leading-[40px] font-[600] text-green-900">
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
                                    <p className="text-[30px]">{count1}</p>
                                    <p>{t(`Seventh.title12`)}</p>
                                </article>
                            </article>
                        </article>

                        <article className="flex mb-[100px] pt-[40px] items-center justify-evenly">
                            <article className="flex items-center gap-[30px]">
                                <img src={image3} alt="" />
                                <article>
                                    <p className="text-[30px]">{count2}</p>
                                    <p>{t(`Seventh.title13`)}</p>
                                </article>
                            </article>
                        </article>
                    </article>

                    <article className="md:block sem:hidden w-[240px] pt-[58px] h-[300px]">
                        <article className="flex items-center mb-[15px] gap-[30px]">
                            <img src={image1} alt="" />
                            <article>
                                <p className="text-[30px]">{count3}</p>
                                <p>{t(`Seventh.title14`)}</p>
                            </article>
                        </article>

                        <article className="flex pt-[40px] items-center justify-evenly">
                            <article className="flex items-center gap-[30px]">
                                <img src={image2} alt="" />
                                <article>
                                    <p className="text-[30px]">{count4}</p>
                                    <p>{t(`Seventh.title15`)}</p>
                                </article>
                            </article>
                        </article>
                    </article>
                </div>
            </div>
        </div>
    );
}
