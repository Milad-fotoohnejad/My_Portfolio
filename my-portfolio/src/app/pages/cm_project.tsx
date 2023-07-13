import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import { FaJava, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

export default function CM_Project() {
  return (
    <div className='content'>
      <h1 className='font-mono text-4xl mb-6'>Classic Mafia Game</h1>

      <section>
        <h2 className='font-mono text-2xl mb-4'>Introduction</h2>
        <p className='mb-6'>
          Description about the project goes here.
        </p>
      </section>

      <section>
        <h2 className='font-mono text-2xl mb-4'>Project Images</h2>
        <Carousel className='mb-6'>
          <Carousel.Item>
            <Image src='/path/to/image1.jpg' alt='Image 1' layout='fill' />
          </Carousel.Item>
          <Carousel.Item>
            <Image src='/path/to/image2.jpg' alt='Image 2' layout='fill' />
          </Carousel.Item>
          {/* Add more Carousel.Item as needed */}
        </Carousel>
      </section>

      <section>
        <h2 className='font-mono text-2xl mb-4'>Tech Stack</h2>
        <div className='flex space-x-4'>
          <FaJava className='text-3xl' />
          <FaReact className='text-3xl' />
          <FaNodeJs className='text-3xl' />
          <FaDatabase className='text-3xl' />
          {/* Add more icons as needed */}
        </div>
      </section>
    </div>
  );
}
