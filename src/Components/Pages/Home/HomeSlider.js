import React from 'react';
import slider1 from '../../../assets/images/banner/1.jpg';
import slider2 from '../../../assets/images/banner/2.jpg';
import slider3 from '../../../assets/images/banner/3.jpg';
import slider4 from '../../../assets/images/banner/4.jpg';
import slider5 from '../../../assets/images/banner/5.jpg';
import slider6 from '../../../assets/images/banner/6.jpg';
import './SliderOverlay.css'
const HomeSlider = () => {
    return (
        <div className='w-9/12 mx-auto my-5 rounded'>
            <div className="carousel w-full rounded-lg">
                {/* Slider 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='slider-img'>
                    <img src={slider1} className="w-full" alt='' />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-10 gap-10">
                        <a href="#slide6" className="btn btn-circle bg-car border-none hover:bg-car">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-car border-none hover:bg-car">❯</a>
                    </div>
                    <div className='absolute left-10 top-28 text-white'>
                        <h1 className='text-6xl font-bold '>
                            Affordable<br /> Price For Car <br />Servicing
                        </h1>
                        <p className='w-2/4 my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-10'>
                            <button className='bg-car py-2 px-2 rounded'>Discover More</button>
                            <button className='bg-transparent text-white border border-white py-2 px-2 rounded'>Discover More</button>
                        </div>
                    </div>
                </div>
                {/* Slider 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='slider-img'>
                    <img src={slider2} className="w-full" alt='' />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-10 gap-10">
                        <a href="#slide1" className="btn btn-circle bg-car border-none hover:bg-car">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-car border-none hover:bg-car">❯</a>
                    </div>
                    <div className='absolute left-10 top-28 text-white'>
                        <h1 className='text-6xl font-bold '>
                            Affordable<br /> Price For Car <br />Servicing
                        </h1>
                        <p className='w-2/4 my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-10'>
                            <button className='bg-car py-2 px-2 rounded'>Discover More</button>
                            <button className='bg-transparent text-white border border-white py-2 px-2 rounded'>Discover More</button>
                        </div>
                    </div>
                </div>
                {/* Slider 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='slider-img'>
                    <img src={slider3} className="w-full" alt='' />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-10 gap-10">
                        <a href="#slide2" className="btn btn-circle bg-car border-none hover:bg-car">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-car border-none hover:bg-car">❯</a>
                    </div>
                    <div className='absolute left-10 top-28 text-white'>
                        <h1 className='text-6xl font-bold '>
                            Affordable<br /> Price For Car <br />Servicing
                        </h1>
                        <p className='w-2/4 my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-10'>
                            <button className='bg-car py-2 px-2 rounded'>Discover More</button>
                            <button className='bg-transparent text-white border border-white py-2 px-2 rounded'>Discover More</button>
                        </div>
                    </div>
                </div>
                {/* Slider 4 */}
                <div id="slide4" className="carousel-item relative w-full">
                    <div className='slider-img'>
                    <img src={slider4} className="w-full" alt='' />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-10 gap-10">
                        <a href="#slide3" className="btn btn-circle bg-car border-none hover:bg-car">❮</a>
                        <a href="#slide5" className="btn btn-circle bg-car border-none hover:bg-car">❯</a>
                    </div>
                    <div className='absolute left-10 top-28 text-white'>
                        <h1 className='text-6xl font-bold '>
                            Affordable<br /> Price For Car <br />Servicing
                        </h1>
                        <p className='w-2/4 my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-10'>
                            <button className='bg-car py-2 px-2 rounded'>Discover More</button>
                            <button className='bg-transparent text-white border border-white py-2 px-2 rounded'>Discover More</button>
                        </div>
                    </div>
                </div>
                {/* Slider 5 */}
                <div id="slide5" className="carousel-item relative w-full">
                    <div className='slider-img'>
                    <img src={slider5} className="w-full" alt='' />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-10 gap-10">
                        <a href="#slide4" className="btn btn-circle bg-car border-none hover:bg-car">❮</a>
                        <a href="#slide6" className="btn btn-circle bg-car border-none hover:bg-car">❯</a>
                    </div>
                    <div className='absolute left-10 top-28 text-white'>
                        <h1 className='text-6xl font-bold '>
                            Affordable<br /> Price For Car <br />Servicing
                        </h1>
                        <p className='w-2/4 my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-10'>
                            <button className='bg-car py-2 px-2 rounded'>Discover More</button>
                            <button className='bg-transparent text-white border border-white py-2 px-2 rounded'>Discover More</button>
                        </div>
                    </div>
                </div>
                {/* Slider 6 */}
                <div id="slide6" className="carousel-item relative w-full">
                    <div className='slider-img'>
                    <img src={slider6} className="w-full" alt='' />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-10 gap-10">
                        <a href="#slide6" className="btn btn-circle bg-car border-none hover:bg-car">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-car border-none hover:bg-car">❯</a>
                    </div>
                    <div className='absolute left-10 top-28 text-white'>
                        <h1 className='text-6xl font-bold '>
                            Affordable<br /> Price For Car <br />Servicing
                        </h1>
                        <p className='w-2/4 my-5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-10'>
                            <button className='bg-car py-2 px-2 rounded'>Discover More</button>
                            <button className='bg-transparent text-white border border-white py-2 px-2 rounded'>Discover More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSlider;