import React from 'react'
import Header from '../Header/Header'
import stick from '../../resources/Riz-Ahmed.jpeg'
import allie from '../../resources/allie.png'
import soph from '../../resources/Soph.png'
export default function About() {
  return (
    <div>
      <Header></Header>
      <div className='flex items-center p-6'>
        <iframe
          width="50%"
          height="560"
          src="https://www.youtube.com/embed/Lzz50xENH4g"
          frameborder="0"
          allowfullscreen
          style={{ border: 'none' }}
        ></iframe>
        <div className='w-1/2 text-right p-4'>
          <span className='text-3xl font-bold'>Left handed</span> searchs for stories to be told Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div className='flex items-center justify-center mt-12 mb-12'><div className='border-b-2 w-1/2'></div></div>
      <div className='flex p-6'>
        <div className='w-1/3 flex flex-col m-8'>
          <img src={stick} className='w-80 h-80' />
          <div className='text-4xl font-bold text-left'>Riz Ahmed</div>
          <div className='text-left'>Title</div>
          <div className='text-left mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
        <div className='w-1/3 flex flex-col m-8'>
          <img src={allie} className='w-80 h-80' />
          <div className='text-4xl font-bold text-left'>Allie Moore</div>
          <div className='text-left'>Title</div>
          <div className='text-left mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
        <div className='w-1/3 flex flex-col m-8'>
          <img src={soph} className='w-80 h-80' />
          <div className='text-4xl font-bold text-left'>Sophia Gholdoian</div>
          <div className='text-left'>Title</div>
          <div className='text-left mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
      </div>
    </div>
  )
}
