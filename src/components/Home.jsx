import About from "./About"
import Navbar from "./NavBar"
import Techs from "./Techs";
import Projects from "./Projects";
import Contact from "./Contact";
import { useState } from "react";

const Home = () => {

  const [dark,setDark] = useState(window.sessionStorage.getItem("dark"))

  if(!window.sessionStorage.getItem("dark")) {
    window.sessionStorage.setItem("dark", "false")
  }

  if(dark==="true") document.documentElement.classList.add('dark')
  else document.documentElement.classList.remove('dark')

  const toggleMod = ()=>{
    window.sessionStorage.setItem("dark", dark==="false" ? "true" : "false")
    setDark(dark==="false" ? "true" : "false")
  }

  return(
    <div className='bg-white dark:bg-zinc-800 min-h-screen w-full'>
      <Navbar toggleMod={toggleMod} dark={dark}/>
      <About dark={dark}/>
      <Techs dark={dark}/>
      <Projects dark={dark}/>
      <Contact dark={dark}/>
    </div>
  )
}








// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";


// // import required modules
// import { Mousewheel, Pagination } from "swiper";

// function Home() {
//   return (
//     <div className=" bg-red-400 max-w-lg max-h-44">
//       <Swiper
//         direction="vertical"
//         slidesPerView={1}
//         spaceBetween={30}
//         pagination={true}
//         scrollbar={false}
//         modules={[Mousewheel, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }




export default Home