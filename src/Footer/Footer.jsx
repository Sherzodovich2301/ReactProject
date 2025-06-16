import FooterLogo from "../Img/LogoFooter.png"
import ImAges3 from "../Img/Social Icons3.png"
import ImAges1 from "../Img/Social Icons.png"
import ImAges2 from "../Img/Social Icons1.png"
import ImAges4 from "../Img/Social Icons4.png"
export default function Footer() {
    return (
        <footer className="w-full h-[300px] bg-black">
            <div className="container flex justify-evenly items-center h-[300px]">
                <article className="sem:hidden md:block">
                    <a href="#nav"><img className="mb-[30px]" src={FooterLogo} alt="" /></a>
                    <p className="text-white mb-[30px]">Copyright © 2020 Nexcent ltd. <br /> All rights reserved</p>
                    <article className="flex gap-[40px]">
                        <a target="blank" href="https://www.instagram.com/_sherzodovvich_/"><img src={ImAges3} alt="" /></a>
                        <a href="https://www.youtube.com/"><img src={ImAges1} alt="" /></a>
                        <a href="https://x.com/"><img src={ImAges4} alt="" /></a>
                        <a href="https://www.youtube.com/c/ImanGadzhi"><img src={ImAges2} alt="" /></a>
                    </article>
                </article>
                <article>
                    <p className="text-[25px] mb-[15px] font-[600] text-white">Company</p>
                    <p className="hover:text-green-500 transition-all cursor-pointer w-auto mb-[10px] text-white">About us</p>
                    <p className="hover:text-green-500 transition-all cursor-pointer w-auto mb-[10px] text-white">Blog</p>
                    <p className="hover:text-green-500 transition-all cursor-pointer w-auto mb-[10px] text-white">Contact us</p>
                    <p className="hover:text-green-500 transition-all cursor-pointer w-auto mb-[10px] text-white">Pricing</p>
                    <p className="hover:text-green-500 transition-all cursor-pointer w-auto mb-[10px] text-white">Testimonials</p>
                </article>
                <article className="hidden md:flex flex-col">
                    <p className="text-[25px] mb-[15px] font-[600] text-white">Support</p>
                    <p className="hover:text-green-500 transition-all cursor-pointer w-auto mb-[10px] text-white">Help center</p>
                    <p className="hover:text-green-500 transition-all cursor-pointer w-auto mb-[10px] text-white">Terms of service</p>
                    <p className="hover:text-green-500 transition-all cursor-pointer w-auto mb-[10px] text-white">Legal</p>
                    <p className="hover:text-green-500 transition-all cursor-pointer w-auto mb-[10px] text-white">Privacy pilicy</p>
                    <p className="hover:text-green-500 transition-all cursor-pointer w-auto mb-[10px] text-white">Status</p>
                </article>
                <article className="sem:hidden md:block">
                    <p className="text-[25px] mb-[15px] font-[600] text-white">
                        Stay up to date
                    </p>
                    <input className="w-[200px] h-[30px] bg-gray-400 text-white pl-[20px] outline-none rounded-[5px]" type="text" />
                </article>
            </div>
        </footer>
    )
}
