import { useTranslation } from "react-i18next"

export default function FourthP() {

    const { t } = useTranslation()

    return (
        <section id="turtP">
            <div className="container md:mt-[0px] sem:mt-[30px] w-full h-[300px] ">
                <article className="flex flex-col mb-[50px] mt-[-50px] items-center">
                    <p className="text-[27px] md:text-[27px] sem:text-[20px] font-[600] flex h-[100px] text-center w-[400px] sem:w-[300px] md:w-[400px]">
                        {t(`Third.title`)}
                    </p>
                    <p className="sem:text-center">
                        {t(`Third.title1`)}
                    </p>
                </article>
            </div>

        </section>
    )
}
