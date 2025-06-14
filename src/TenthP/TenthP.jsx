import { useTranslation } from "react-i18next"

export default function TenthP() {

    const { t } = useTranslation()

    return (
        <div className="container w-full h-[300px]">
            <article className="flex flex-col mt-[40px] items-center">
                <p className="text-[27px] md:w-[350px] sem:w-[300px] text-center md:mb-[0] sem:mb-[-13px] font-[600] mb-[-50px] flex h-[100px] w-[400px]">
                    {t(`Eleventh.title`)}
                </p>
                <p className="text-center md:w-[600px] sm:w-[500px] sem:w-[300px] w-[600px]">
                    {t(`Eleventh.title1`)}
                </p>
            </article>
        </div>
    )
}
