import React from 'react';
import Navbar from './Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCube } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

const Home = () => {
  return (

    <main className='flex relative overflow-hidden'>
      <div className='w-3/4 h-screen' style={{ background: 'linear-gradient(to top right, #635b5b, black)' }}>
        <Navbar />

        <div className=' w-full h-full text-white flex flex-col gap-4 justify-center items-center'>
          <h2 className='italic sm:text-4xl'>Are you Hungry ?</h2>
          <h2 className='sm:text-8xl'>Dont Wait !</h2>
          <h2 className='text-myYellow italic sm:text-4xl'>Let start to order Food now</h2>
          <Link to='/userscreen' className='rounded-2xl border-2 px-4 py-1 hover:border-black hover:font-bold hover:text-black hover:bg-myYellow'>Check Out Menu</Link>

        </div>



      </div>


      <div className=' flex-col w-1/4 bg-myYellow' >

      </div>
      <div className='absolute w-1/3  sm:h-2/3 right-20  top-32  z-10  ' >
        <Swiper
          effect={'cube'}
          grabCursor={true}

          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}

          modules={[EffectCube, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="chowmin.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="pizza.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="4.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="dosa.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="manchurian.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="momos.png" />
          </SwiperSlide>
        </Swiper>


      </div>

    </main>
  )
}

export default Home
