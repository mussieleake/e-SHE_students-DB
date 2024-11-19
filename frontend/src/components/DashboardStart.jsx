import React from 'react';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { PiStudent } from "react-icons/pi";
import { FaSchool } from "react-icons/fa";

const DashboardStart = () => {
  return (
    <div className='flex flex-wrap gap-4 w-full'>
      <BorderWrapper>
        <div className='rounded-full h-12 w-12 items-center justify-center flex bg-sky-800'>
          <PiStudent className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-400 font-light'>Total Student</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>$2889</strong>
            <span className='text-sm text-green-500 pl-2'>+22</span>
          </div>
        </div>
      </BorderWrapper>
      <BorderWrapper>
        <div className='rounded-full h-12 w-12 items-center justify-center flex bg-sky-500'>
          <FaSchool className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-400 font-light'>Total University</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>$2889</strong>
            <span className='text-sm text-green-500 pl-2'>+22</span>
          </div>
        </div>
      </BorderWrapper>
      <BorderWrapper>
        <div className='rounded-full h-12 w-12 items-center justify-center flex bg-purple-900'>
          <HiOutlineAcademicCap className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-400 font-light'>Blind</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>$2889</strong>
            <span className='text-sm text-green-500 pl-2'>+22</span>
          </div>
        </div>
      </BorderWrapper>
      <BorderWrapper>
        <div className='rounded-full h-12 w-12 items-center justify-center flex bg-red-500'>
          <HiOutlineAcademicCap className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-900 font-light'>Deaf</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold'>$2889</strong>
            <span className='text-sm text-green-500 pl-2'>+22</span>
          </div>
        </div>
      </BorderWrapper>
    </div>
  );
}

export default DashboardStart;

function BorderWrapper({ children }) {
  return (
    <div className='bg-white cursor-pointer p-4 flex-1 min-w-[200px] gap-4 flex border border-gray-200 rounded-lg items-center transition-transform duration-300 transform hover:scale-105'>
      {children}
    </div>
  );
}