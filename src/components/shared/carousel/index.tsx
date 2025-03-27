import { Carousel as C, CarouselContent, CarouselItem, CarouselNavigation } from '@/components/ui/carousel';
import { CarouselProps } from '@/types';
import React from 'react';
import { Link } from 'react-router-dom';

const Carousel: React.FC<CarouselProps> = ({ products }) => {
  return (
    <C>
      <CarouselContent>
        {products?.map((item, index: number) => (
          <CarouselItem key={index} className='basis-1/6'>
            <Link to='/category'>
              <img className="w-[210px] h-[131px] object-cover" src={item.image} alt={item.alt} title={item.title} />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNavigation alwaysShow left="left-[-5%]" width="w-[110%]" />
    </C>
  )
}

export default Carousel;