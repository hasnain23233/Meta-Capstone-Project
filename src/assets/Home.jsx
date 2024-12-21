import React from 'react'
import imag from './icons_assets/restauranfood.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Food from "./Spec/Food"

const Home = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    };
    return (
        <>
            <div className='bg-[#203f18d3] h-96'>
                <div className='w-9/12 m-auto justify-between flex'>
                    <div className='w-6/12'>
                        <h1 className='text-5xl font-bold text-yellow-300 pt-14'>Litter Lamon</h1>
                        <h1 className='text-4xl font-bold text-white pt-5'>Chicago</h1>
                        <p className='text-2xl font-bold text-white pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad amet labore ,</p>
                        <button className='bg-yellow-300 font-bold text-gray-600 p-5 mt-10 rounded-md'>Reserve a table</button>
                    </div>
                    <div className='w-6/12'>

                        <Slider {...settings2}>
                            <div className=' text-center'>
                                <img className='w-6/12 h-full mt-10 m-auto rounded-md' src={imag} alt="" />
                            </div>
                            <div className='w-6/12 text-center'>
                                <img className='w-6/12 h-fit mt-10 m-auto rounded-md' src={'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvY2xhdGljZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D'} alt="" />
                            </div>
                            <div className='w-6/12 text-center'>
                                <img className='w-6/12 h-full mt-10 m-auto rounded-md' src={"https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div >
            <div className='w-11/12 text-center mt-20 m-auto'>
                <h1 className='text-5xl font-bold text-gray-600'>This weeks specials!</h1>
                <div className='mt-5 flex justify-between gap-3'>
                    <div className='w-4/12'>
                        <img className='w-full rounded-t-md' src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className='bg-gray-200 rounded-b-md  p-3'>
                            <div className='flex items-center justify-between'>

                                <h1 className='text-2xl font-bold text-gray-800'>Food & Drink</h1>
                                <p className='text-xl text-orange-400 font-bold'>$12.899</p>
                            </div>
                            <p className='text-start line-clamp-4 text-gray-500 mt-3 font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, magni vitae vero similique alias reiciendis beatae aliquid inventore blanditiis, nemo minus eius laudantium, quasi tenetur distinctio delectus cum praesentium explicabo.</p>
                            <h1 className='text-xl text-start mt-3 font-bold text-gray-800'>Order a delivery</h1>
                        </div>
                    </div>
                    <div className='w-4/12'>
                        <img className='w-full rounded-t-md' src="https://images.unsplash.com/photo-1447078806655-40579c2520d6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className='bg-gray-200 rounded-md  p-3'>
                            <div className='flex items-center justify-between'>

                                <h1 className='text-2xl font-bold text-gray-800'>Baking and Kitchen</h1>
                                <p className='text-xl text-orange-400 font-bold'>$92.899</p>
                            </div>
                            <p className='text-start line-clamp-4 text-gray-500 mt-3 font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, magni vitae vero similique alias reiciendis beatae aliquid inventore blanditiis, nemo minus eius laudantium, quasi tenetur distinctio delectus cum praesentium explicabo.</p>
                            <h1 className='text-xl text-start mt-3 font-bold text-gray-800'>Order a delivery</h1>
                        </div>
                    </div>
                    <div className='w-4/12'>
                        <img className='w-full rounded-t-md' src="https://plus.unsplash.com/premium_photo-1661313675108-1dedbdf4e533?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className='bg-gray-200 rounded-md  p-3'>
                            <div className='flex items-center justify-between'>

                                <h1 className='text-2xl font-bold text-gray-800'>Concepts</h1>
                                <p className='text-xl text-orange-400 font-bold'>$12.899</p>
                            </div>
                            <p className='text-start line-clamp-4 text-gray-500 mt-3 font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, magni vitae vero similique alias reiciendis beatae aliquid inventore blanditiis, nemo minus eius laudantium, quasi tenetur distinctio delectus cum praesentium explicabo.</p>
                            <h1 className='text-xl text-start mt-3 font-bold text-gray-800'>Order a delivery</h1>
                        </div>
                    </div>
                </div>
                <Food />
            </div>
            <div className='w-11/12 text-center mt-20 m-auto'>
                <h1 className='text-5xl font-bold text-gray-600'>Testimonials</h1>
                <Slider {...settings}>
                    <div className='mt-5  flex justify-between gap-3'>
                        <div className='w-11/12'>
                            <img className='w-full rounded-t-md' src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className='bg-gray-200 rounded-md  p-3'>
                                <div className='flex items-center justify-between'>

                                    <h1 className='text-2xl font-bold text-gray-800'>John Doe</h1>
                                    <p className='text-xl text-orange-400 font-bold'>5/5</p>
                                </div>
                                <p className='text-start line-clamp-4 text-gray-500 mt-3 font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, magni vitae vero similique alias reiciendis beatae aliquid inventore blanditiis, nemo minus eius laudantium, quasi tenetur distinctio delectus cum praesentium explicabo.</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5  flex justify-between gap-3'>
                        <div className='w-11/12'>
                            <img className='w-full rounded-t-md' src="https://images.unsplash.com/photo-1722089263250-f8f10e1b660f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className='bg-gray-200 rounded-md  p-3'>
                                <div className='flex items-center justify-between'>

                                    <h1 className='text-2xl font-bold text-gray-800'>John Doe</h1>
                                    <p className='text-xl text-orange-400 font-bold'>5/5</p>
                                </div>
                                <p className='text-start line-clamp-4 text-gray-500 mt-3 font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, magni vitae vero similique alias reiciendis beatae aliquid inventore blanditiis, nemo minus eius laudantium, quasi tenetur distinctio delectus cum praesentium explicabo.</p>
                            </div>
                        </div>

                    </div>

                    <div className='mt-5  flex justify-between gap-3'>
                        <div className='w-11/12'>
                            <img className='w-full rounded-t-md' src="https://images.unsplash.com/photo-1661928438616-bda8b4931762?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className='bg-gray-200 rounded-md  p-3'>
                                <div className='flex items-center justify-between'>

                                    <h1 className='text-2xl font-bold text-gray-800'>John Doe</h1>
                                    <p className='text-xl text-orange-400 font-bold'>5/5</p>
                                </div>
                                <p className='text-start line-clamp-4 text-gray-500 mt-3 font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, magni vitae vero similique alias reiciendis beatae aliquid inventore blanditiis, nemo minus eius laudantium, quasi tenetur distinctio delectus cum praesentium explicabo.</p>
                            </div>
                        </div>

                    </div>
                </Slider>
            </div >
            <div className=' bg-gray-200 mt-10 h-96'>
                <div className='w-9/12 m-auto justify-between flex'>
                    <div className='w-6/12'>
                        <h1 className='text-5xl font-bold text-yellow-300 pt-14'>Litter Lamon</h1>
                        <h1 className='text-4xl font-bold text-gray-600 pt-5'>Chicago</h1>
                        <p className='text-2xl font-bold text-gray-600 pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad amet labore ,</p>
                        <button className='bg-yellow-300 font-bold text-gray-600 p-5 mt-10 rounded-md'>Reserve a table</button>
                    </div>
                    <div className='w-6/12 text-center'>
                        <img className='w-6/12 mt-10 m-auto  rounded-md' src={imag} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
