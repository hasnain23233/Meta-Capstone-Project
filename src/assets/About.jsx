import React from 'react'

const About = () => {
    return (
        <div>
            <div className='min-h-screen bg-gray-100 flex items-center justify-center py-12'>
                <div className='max-w-4xl p-8 bg-white shadow-lg rounded-lg'>
                    <h1 className='text-4xl font-bold mb-6 text-center text-gray-800'>About Us</h1>
                    <p className='mb-6 text-lg text-gray-700'>
                        Welcome to Litter Limon! We are a family-owned restaurant dedicated to providing our customers with the best dining experience. Our mission is to serve delicious and healthy meals made from the freshest ingredients.
                    </p>
                    <p className='mb-6 text-lg text-gray-700'>
                        At Litter Limon, we believe in the power of good food to bring people together. Whether you're here for a quick lunch, a family dinner, or a special occasion, we strive to make every visit memorable.
                    </p>
                    <p className='mb-6 text-lg text-gray-700'>
                        Our menu features a variety of dishes inspired by different cuisines, all prepared with love and care. We are committed to sustainability and source our ingredients from local farmers and suppliers whenever possible.
                    </p>
                    <p className='mb-6 text-lg text-gray-700'>
                        Thank you for choosing Litter Limon. We look forward to serving you!
                    </p>
                    <div className='flex justify-center'>
                        <img src='https://images.unsplash.com/photo-1632103962914-5b156d47c987?q=80&w=1509&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Litter Limon' className='w-full h-auto rounded-lg shadow-md' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
