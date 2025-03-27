import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "../../components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from "react"

const Hero = () => {

  const carouselImages = [
    {
      id: 1,
      link: 'https://placehold.co/600x330'
    },
    {
      id: 2,
      link: 'https://placehold.co/600x330'
    },
    {
      id: 3,
      link: 'https://placehold.co/600x430'
    },
    {
      id: 4,
      link: 'https://placehold.co/600x330'
    },
  ]

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 w-full rounded-lg">
          <Carousel
            className="col-span-2 w-full rounded-lg"
          >
            <CarouselContent>
              {carouselImages.map((item) => (
                <CarouselItem key={item.id} className="overflow-hidden rounded-md">
                  <img className="w-full rounded-lg h-[330px] object-cover" src={item.link} alt="" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNavigation alwaysShow left="left-0" width="w-[100%]" />
          </Carousel>
        </div>
        <img className="rounded-lg h-[330px] object-cover w-full" src="https://placehold.co/330x350" alt="" />
        <img className="rounded-lg h-[330px] object-cover w-full" src="https://placehold.co/330x350" alt="" />
      </div>
    </div>
  )
}

export default Hero
