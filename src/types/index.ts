export type CarouselProps = {
  products: {
    title: string;
    image: string;
    alt: string;
  }[];
};

export type Products = {
  gridCols?: number
  products: {
    title: string
    image: string
  }[]
  title: string
}

export type ProductTypes = {
  data: {
    id?: number
    name: string
    brand: string
    rating: number
    price: number
    image: string[]
  }
}