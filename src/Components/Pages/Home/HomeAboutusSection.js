import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const HomeAboutusSection = () => {
    return (
        <div className='flex gap-36 my-10'>
            <div className='w-2/4 relative'>
                <img src={person} alt='' className='w-96 h-96 rounded-lg'/>
                <img src={parts} alt='' className='w-72 absolute left-40 top-1/4 h-72 border-4 border-slate-200 rounded-lg'/>
            </div>
            <div className='w-2/4'>
                <p className='text-car text-lg font-bold'>About Us</p>
                <h2 className='text-5xl font-bold my-10'>We are qualified & of experience in this field</h2>
                <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br/>
                the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <button className='bg-car py-2 px-3 rounded text-white my-5'>Get More Info</button>
            </div>
        </div>
    );
};

export default HomeAboutusSection;