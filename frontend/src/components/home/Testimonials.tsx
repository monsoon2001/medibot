import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Doctor from "/page-photos/doctor.png";

const Testimonials = () => {
  return (
        <div id="testimonials" className='bg-[#05101c] w-full h-auto pb-10 pt-10'>
            <div className='max-w-[1100px] mx-auto flex flex-col justify-center items-center p-5 space-y-5'>
                <h1 className='text-lg'>TESTIMONIALS</h1>
                <h1 className='text-2xl font-bold underline lg:text-3xl'>What Our Users Say About Us</h1>
                <p className='text-center lg:text-lg'>Hear from our satisfied users about their experience at MediBot</p>
                {/* Carousel section */}
                <Carousel className="h-auto bg-black rounded-3xl w-full p-5 shadow-2xl">
                {/* item 1 */}
                <div className='flex flex-col space-y-10 p-10 md:flex-row md:space-y-0 md:space-x-8 lg:space-x-20 lg:p-20'>
                    <div className='rounded-xl border-2 p-2 border-dashed border-blue-500'>
                    <img src={Doctor} alt="" />
                    </div>
                    <div className='flex flex-col space-y-5 justify-center items-start border-2 p-5 border-blue-500 rounded-3xl text-white'>
                    <p className='text-lg text-left'>
                    "MediBot has been a lifesaver! Whenever I have a health concern, I can get instant advice without having to wait for a doctor's appointment. The symptom checker is incredibly accurate and easy to use."</p>
                    <h1 className='text-left'>Jane S. <br />
                    <span className='text-gray-500'>CEO of McLaren Racing</span></h1>
                    </div>
                </div>
                {/* item 1 */}
                <div className='flex flex-col space-y-10 p-10 md:flex-row md:space-y-0 md:space-x-8 lg:space-x-20 lg:p-20'>
                    <div className='rounded-xl border-2 p-2 border-dashed border-blue-500'>
                    <img src={Doctor} alt="" />
                    </div>
                    <div className='flex flex-col space-y-5 justify-center items-start text-white border-2 p-5 border-blue-500 rounded-3xl'>
                    <p className='text-lg text-left'>
                    "MediBot has been a lifesaver! Whenever I have a health concern, I can get instant advice without having to wait for a doctor's appointment. The symptom checker is incredibly accurate and easy to use."</p>
                    <h1 className='text-left'>Jane S. <br />
                    <span className='text-gray-500'>CEO of McLaren Racing</span></h1>
                    </div>
                </div>
                {/* item 1 */}
                <div className='flex flex-col space-y-10 p-10 md:flex-row md:space-y-0 md:space-x-8 lg:space-x-20 lg:p-20'>
                    <div className='rounded-xl border-2 p-2 border-dashed border-blue-500'>
                    <img src={Doctor} alt="" />
                    </div>
                    <div className='flex flex-col space-y-5 justify-center items-start text-white border-2 p-5 border-blue-500 rounded-3xl'>
                    <p className='text-lg text-left'>
                    "MediBot has been a lifesaver! Whenever I have a health concern, I can get instant advice without having to wait for a doctor's appointment. The symptom checker is incredibly accurate and easy to use."</p>
                    <h1 className='text-left'>Jane S. <br />
                    <span className='text-gray-500'>CEO of McLaren Racing</span></h1>
                    </div>
                </div>
            </Carousel>
            </div>
        </div>
  )
}

export default Testimonials
