import { useEffect, useRef, useState } from "react";
import img from "../Img/Logo (4).png"
import { useTranslation } from 'react-i18next';

export default function NavBar() {
  const { i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log("Clicked on:", event.target); // 👈 TEST QISMI
      if (langRef.current && !langRef.current.contains(event.target)) {
        setOpenLang(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    setOpenLang(false);
  };

  return (
    <section id="nav">
      <div className="w-screen h-[50px] z-20 fixed">
        <nav className="flex justify-around bg-gray-100 items-center w-full h-[80px]">
          <a href="#nav"><img className=" h-auto" src={img} alt="" /></a>
          <ul className="hidden lg:flex items-center gap-[45px]">
            <li className="cursor-pointer hover:text-green-500 transition-all"><a href="#nav">Home</a></li>
            <li className="cursor-pointer hover:text-green-500 transition-all"><a href="#sakkizP">Service</a></li>
            <li className="cursor-pointer hover:text-green-500 transition-all"><a href="#uchP">Feature</a></li>
            <li className="cursor-pointer hover:text-green-500 transition-all"><a href="#turtP">Product</a></li>
            <li className="cursor-pointer hover:text-green-500 transition-all"><a href="#oltiP">Testimonial</a></li>
            <li className="cursor-pointer hover:text-green-500 transition-all"><a href="#unbirP">FAQ</a></li>
          </ul>

          {/* TIL TUGMASI (Dropdown) */}
          <div ref={langRef} className="hidden lg:flex items-center relative">
            <button
              onClick={() => setOpenLang(!openLang)}
              className="text-white hover:text-green-500 hover:bg-white hover:border-[1px] transition-all hover:border-green-500 w-[110px] h-[40px] rounded-[5px] bg-green-500"
            >
              Language
            </button>

            {openLang && (
              <div className="absolute top-[45px] right-[12px] bg-white border border-gray-200 rounded-md shadow-md z-50">
                <button
                  onClick={() => changeLanguage("uz")}
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("ru")}
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  Russian
                </button>
              </div>
            )}
          </div>

          {/* Mobil menyu tugmasi */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="pl-[250px] lg:hidden text-[26px]">
            ☰
          </button>
        </nav>

        {/* Mobil menyu */}
        {menuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-black z-30 flex justify-center items-center">
            <div className="bg-white w-[80%] p-6 rounded-lg shadow-lg text-center space-y-4">
              <button onClick={() => setMenuOpen(false)} className="text-red-500 float-right text-xl">✖</button>
              <ul className="flex flex-col space-y-4">
                <li><a onClick={() => setMenuOpen(false)} href="#nav">Home</a></li>
                <li><a onClick={() => setMenuOpen(false)} href="#sakkizP">Service</a></li>
                <li><a onClick={() => setMenuOpen(false)} href="#uchP">Feature</a></li>
                <li><a onClick={() => setMenuOpen(false)} href="#turtP">Product</a></li>
                <li><a onClick={() => setMenuOpen(false)} href="#oltiP">Testimonial</a></li>
                <li><a onClick={() => setMenuOpen(false)} href="#unbirP">FAQ</a></li>
                <button onClick={() => changeLanguage("uz")} className="bg-green-500 text-white px-4 py-2 rounded">🇺🇿 Uzbek</button>
                <button onClick={() => changeLanguage("ru")} className="bg-green-500 text-white px-4 py-2 rounded">🇷🇺 Russian</button>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
