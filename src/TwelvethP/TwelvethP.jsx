import { useTranslation } from "react-i18next"

export default function TwelvethP() {

    const { t } = useTranslation()

    return (
        <div className="w-full h-[250px] bg-gray-100">
            <p className="text-center leading-[55px] pt-[30px] md:text-[44px] sem:text-[35px] text-[44px] font-[600]">
                Pellentesque suscipit <br /> fringilla libero eu.
            </p>
            <article className="w-full text-center mt-[50px]">
                <button className="text-white w-[150px] h-[40px] rounded-[5px] bg-green-500">
                    {t(`Twelveth.title`)}
                </button>
            </article>
        </div>
    )
}
