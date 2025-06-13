import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img2 from "../Img/Illustration.png"
import { useTranslation } from 'react-i18next';
// import {Pagination, Autoplay} from "swiper/modules"



export default function SecondSwiperP() {

    const { t } = useTranslation()

    return (
        <div className='w-[100%] sem:h-[400px] md:h-[820px] h-[820px] bg-gray-100'>

            <Swiper className='container min-h-screen'
                spaceBetween={50}
                slidesPerView={1}
                // pagination={{ dynamicBullets: true }}
                // autoplay={{ delay: 2000, disableOnInteraction: false }}
                // modules={[Pagination, Autoplay]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className='pt-[80px]'>
                    <div className='md:flex sem:hidden max-w-[1050px] m-auto lg:mt-0 sem:mt-[30px] flex items-center justify-evenly w-[100%] h-[700px] bg-gray-100'>
                        <article className='w-full lg:text-start  sem:text-center lg:mb-[40px] sem:mb-[40px]'>
                            <h1 className='text-[45px] md:text-[45px] sem:text-[30px] leading-[50px] font-[600] mb-[20px]'>
                                {t(`slide.title`)}
                            </h1>
                            <p className='mb-[40px]'>
                                {t('slide.description')}
                            </p>
                            <button className="text-white w-[170px] h-[40px] rounded-[5px] bg-green-500">
                                {t('slide.button')}
                            </button>
                        </article>
                        <article className='w-full flex justify-center'>
                            <img src={img2} alt="" />
                        </article>
                    </div>
                </SwiperSlide>



                <SwiperSlide className='pt-[80px]'>
                    <div className='md:flex sem:hidden max-w-[1050px] lg:mt-0 sem:mt-[30px] flex items-center justify-evenly container w-[100%] h-[500px] bg-gray-100'>
                        <article className='w-full lg:text-start sem:text-center lg:mb-[40px] sem:mb-[40px]'>
                            <h1 className='text-[45px] md:text-[45px] sem:text-[30px] leading-[50px] font-[600] mb-[20px]'>
                                {t(`slide.title`)}
                            </h1>
                            <p className='mb-[40px]'>
                                {t('slide.description')}
                            </p>
                            <button className="text-white w-[170px] h-[40px] rounded-[5px] bg-green-500">
                                {t('slide.button')}
                            </button>
                        </article>
                        <article className='w-full flex justify-center'>
                            <img src={img2} alt="" />
                        </article>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='pt-[80px]'>
                    <div className='md:flex sem:hidden max-w-[1050px] lg:mt-0 sem:mt-[30px] flex items-center justify-evenly container w-[100%] h-[500px] bg-gray-100'>
                        <article className='w-full lg:text-start sem:text-center text-center lg:mb-[40px] sem:mb-[40px]'>
                            <h1 className='text-[45px] md:text-[45px] sem:text-[30px] leading-[50px] font-[600] mb-[20px]'>
                                {t(`slide.title`)}
                            </h1>
                            <p className='mb-[40px]'>
                                {t('slide.description')}
                            </p>
                            <button className="text-white w-[170px] h-[40px] rounded-[5px] bg-green-500">
                                {t('slide.button')}
                            </button>
                        </article>
                        <article className='w-full flex justify-center'>
                            <img src={img2} alt="" />
                        </article>
                    </div>
                </SwiperSlide>
                <article className='w-full  flex h-[500px] justify-center '>
                    <img className='hidden h-[300px] pt-[0px] justify-center md:hidden sem:flex' src={img2} alt="" />
                </article>
            </Swiper>

        </div>
    )
}
