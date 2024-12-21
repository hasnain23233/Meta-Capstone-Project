import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slder = () => {
    const Food = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nameDish: "Health & Wellness",
            price: 82.899,
            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, magni vitae vero similique alias reiciendis beatae aliquid inventore blanditiis, nemo minus eius laudantium, quasi tenetur distinctio delectus cum praesentium explicabo."
        },
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1511909525232-61113c912358?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nameDish: "tea, banana",
            price: 12.899,
            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, magni vitae vero similique alias reiciendis beatae aliquid inventore blanditiis, nemo minus eius laudantium, quasi tenetur distinctio delectus cum praesentium explicabo."
        },
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nameDish: "Food & Drink",
            price: 12.899,
            dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, magni vitae vero similique alias reiciendis beatae aliquid inventore blanditiis, nemo minus eius laudantium, quasi tenetur distinctio delectus cum praesentium explicabo."
        },
    ]
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    };
    return (
        <div>
            <div className='mt-5 flex justify-between gap-3'>

                <div className='w-full'>
                    <Slider {...settings2}>
                        {Food.map((item) => {
                            return (
                                <>
                                    <div className='w-11/12 m-3 transform-cpu'>
                                        <img className='w-full rounded-t-md' src={item.img} alt="" />
                                        <div className='bg-gray-200 rounded-b-md  p-3'>
                                            <div className='flex items-center justify-between'>

                                                <h1 className='text-2xl font-bold text-gray-800'>{item.nameDish}</h1>
                                                <p className='text-xl text-orange-400 font-bold'>${item.price}</p>
                                            </div>
                                            <p className='text-start line-clamp-4 text-gray-500 mt-3 font-semibold'>{item.dis}</p>
                                            <h1 className='text-xl text-start mt-3 font-bold text-gray-800'>Order a delivery</h1>
                                        </div>
                                    </div>

                                </>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Slder
